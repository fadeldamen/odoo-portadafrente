openerp.base_import = function (instance) {
    var QWeb = instance.web.qweb;
    var _t = instance.web._t;
    var _lt = instance.web._lt;

    /**
     * Safari does not deal well at all with raw JSON data being
     * returned. As a result, we're going to cheat by using a
     * pseudo-jsonp: instead of getting JSON data in the iframe, we're
     * getting a ``script`` tag which consists of a function call and
     * the returned data (the json dump).
     *
     * The function is an auto-generated name bound to ``window``,
     * which calls back into the callback provided here.
     *
     * @param {Object} form the form element (DOM or jQuery) to use in the call
     * @param {Object} attributes jquery.form attributes object
     * @param {Function} callback function to call with the returned data
     */
    function jsonp(form, attributes, callback) {
        attributes = attributes || {};
        var options = {jsonp: _.uniqueId('import_callback_')};
        window[options.jsonp] = function () {
            delete window[options.jsonp];
            callback.apply(null, arguments);
        };
        if ('data' in attributes) {
            _.extend(attributes.data, options);
        } else {
            _.extend(attributes, {data: options});
        }
        _.extend(attributes, {
            dataType: 'script',
        });
        $(form).ajaxSubmit(attributes);
    }

    // if true, the 'Import', 'Export', etc... buttons will be shown
    instance.web.ListView.prototype.defaults.import_enabled = true;
    instance.web.ListView.include({
        on_loaded: function () {
            var self = this;
            var add_button = false;
            if (!this.$buttons) {
                add_button = true;
            }
            this._super.apply(this, arguments);
            if(add_button) {
                this.$buttons.on('click', '.oe_list_button_import', function() {
                    new instance.web.DataImport(self, self.dataset).open();
                    return false;
                });
            }
        }
    });

    instance.web.DataImport = instance.web.Dialog.extend({
        template: 'ImportView',
        dialog_title: _lt("Import Data"),
        opts: [
            {name: 'encoding', label: _lt("Encoding:"), value: 'utf-8'},
            {name: 'separator', label: _lt("Separator:"), value: ','},
            {name: 'quoting', label: _lt("Quoting:"), value: '"'}
        ],
        events: {
            'change .oe_import_grid input': 'import_dryrun',
            'change input.oe_import_file': 'file_update',
            'change input.oe_import_has_header, .oe_import_options input': 'settings_updated',
            'click a.oe_import_csv': function (e) {
                e.preventDefault();
            },
            'click a.oe_import_export': function (e) {
                e.preventDefault();
            },
            'click a.oe_import_toggle': function (e) {
                e.preventDefault();
                var $el = $(e.target);
                ($el.next().length
                        ? $el.next()
                        : $el.parent().next())
                    .toggle();
            }
        },
        init: function (parent, dataset) {
            var self = this;
            this._super(parent, {
                buttons: [
                    {text: _t("Import File"), click: function () {
                        self.do_import();
                    }, 'class': 'oe_import_dialog_button'}
                ]
            });
            this.res_model = parent.model;
            // import object id
            this.id = null;
            this.Import = new instance.web.Model('base_import.import');
        },
        start: function () {
            var self = this;
            return this.Import.call('create', [{
                'res_model': this.res_model
            }]).then(function (id) {
                self.id = id;
                self.$('input[name=import_id]').val(id);
            });
        },

        import_options: function () {
            var self = this;
            var options = {
                headers: this.$('input.oe_import_has_header').prop('checked')
            };
            _(this.opts).each(function (opt) {
                options[opt.name] =
                    self.$('input.oe_import_' + opt.name).val();
            });
            return options;
        },

        //- File & settings change section
        file_update: function (e) {
            if (!this.$('input.oe_import_file').val()) { return; }

            this.$el.removeClass('oe_import_preview oe_import_error');
            jsonp(this.$el, {
                url: '/base_import/set_file'
            }, this.proxy('settings_updated'));
        },
        settings_updated: function () {
            this.$el.addClass('oe_import_with_file');
            // TODO: test that write // succeeded?
            this.Import.call(
                'parse_preview', [this.id, this.import_options()])
                .then(this.proxy('preview'));
        },
        preview: function (result) {
            this.$el.toggleClass(
                'oe_import_noheaders',
                !this.$('input.oe_import_has_header').prop('checked'));
            if (result.error) {
                this.$el.addClass('oe_import_error');
                this.$('.oe_import_error_report').html(
                    QWeb.render('ImportView.preview.error', result));
                return;
            }
            this.$el.addClass('oe_import_preview');
            this.$('table').html(QWeb.render('ImportView.preview', result));

            var $fields = this.$('.oe_import_fields input');
            this.render_fields_matches(result, $fields);
            var data = this.generate_fields_completion(result);
            var item_finder = function (id, items) {
                items = items || data;
                for (var i=0; i < items.length; ++i) {
                    var item = items[i];
                    if (item.id === id) {
                        return item;
                    }
                    var val;
                    if (item.children && (val = item_finder(id, item.children))) {
                        return val;
                    }
                }
                return '';
            };
            $fields.select2({
                allowClear: true,
                minimumInputLength: 0,
                data: data,
                initSelection: function (element, callback) {
                    var default_value = element.val();
                    if (!default_value) {
                        callback('');
                        return;
                    }

                    callback(item_finder(default_value));
                },

                width: 'resolve',
                dropdownCssClass: 'oe_import_selector'
            });
            this.import_dryrun();
        },
        generate_fields_completion: function (root) {
            var basic = [];
            var regulars = [];
            var o2m = [];
            function traverse(field, ancestors, collection) {
                var subfields = field.fields;
                var field_path = ancestors.concat(field);
                var label = _(field_path).pluck('string').join(' / ');
                var id = _(field_path).pluck('name').join('/');

                // If non-relational, m2o or m2m, collection is regulars
                if (!collection) {
                    if (field.name === 'id') {
                        collection = basic
                    } else if (_.isEmpty(subfields)
                            || _.isEqual(_.pluck(subfields, 'name'), ['id', '.id'])) {
                        collection = regulars;
                    } else {
                        collection = o2m;
                    }
                }

                collection.push({
                    id: id,
                    text: label,
                    required: field.required
                });

                for(var i=0, end=subfields.length; i<end; ++i) {
                    traverse(subfields[i], field_path, collection);
                }
            }
            _(root.fields).each(function (field) {
                traverse(field, []);
            });

            var cmp = function (field1, field2) {
                return field1.text.localeCompare(field2.text);

            };
            regulars.sort(cmp);
            o2m.sort(cmp);
            return basic.concat([
                { text: _t("Normal Fields"), children: regulars },
                { text: _t("Relation Fields"), children: o2m }
            ]);
        },
        render_fields_matches: function (result, $fields) {
            if (_(result.matches).isEmpty()) { return; }
            $fields.each(function (index, input) {
                var match = result.matches[index];
                if (!match) { return; }

                var current_field = result;
                input.value = _(match).chain()
                    .map(function (name) {
                        // WARNING: does both mapping and folding (over the
                        //          ``field`` iterator variable)
                        return current_field = _(current_field.fields).find(function (subfield) {
                            return subfield.name === name;
                        });
                    })
                    .pluck('name')
                    .value()
                    .join('/');
            });
        },

        //- import itself
        call_import: function (options) {
            var self = this;
            var fields = this.$('.oe_import_fields input.oe_import_match_field').map(function (index, el) {
                return $(el).select2('val') || false;
            }).get();
            return this.Import.call(
                'do', [this.id, fields, this.import_options()], options);
        },
        import_dryrun: function () {
//            this.call_import({ dryrun: true })
//                .then(this.proxy('render_import_errors'));
        },
        do_import: function () {
            var self = this;
            this.call_import({ dryrun: false }).then(function (errors) {
                if (_.isEmpty(errors)) {
                    if (self.getParent().reload_content) {
                        self.getParent().reload_content();
                    }
                    self.close();
                    return;
                }
                self.render_import_errors(errors);
            });
        },
        render_import_errors: function (errors) {
            if (_.isEmpty(errors)) {
                this.$el.removeClass('oe_import_error');
                return;
            }
            // import failed (or maybe just warnings, if we ever get
            // warnings?)
            this.$el.addClass('oe_import_error');
            this.$('.oe_import_error_report').html(
                QWeb.render('ImportView.error', {errors: errors}));
        },
    });
};