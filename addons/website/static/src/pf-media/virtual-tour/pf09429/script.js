TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4919744548135374,
        "roll": 0,
        "pitch": -10.621157311431771,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 97.5694024036388
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4919744548135374,
        "yaw": 97.5694024036388,
        "pitch": -10.621157311431771,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4933132763465897,
        "roll": 0,
        "pitch": -10.503370279902917,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -145.88568385454087
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4933132763465897,
        "yaw": -145.88568385454087,
        "pitch": -10.503370279902917,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": true,
      "hfov": 83.7,
      "id": "panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0",
      "angle": -118,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Jardim Entrada",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784",
  "pitch": 0
 },
 {
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -10.089171974522293,
   "class": "PanoramaCameraPosition",
   "yaw": -138.03821656050957
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4404431264645594,
        "roll": 0,
        "pitch": -15.453858228726645,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 162.3639252681575
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4404431264645594,
        "yaw": 162.3639252681575,
        "pitch": -15.453858228726645,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 3); this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4076439201699773,
        "roll": 0,
        "pitch": -17.3200636243283,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -168.10387134201198
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4076439201699773,
        "yaw": -168.10387134201198,
        "pitch": -17.3200636243283,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.5656235011023982,
        "roll": 0,
        "pitch": -2.6694792102593334,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 65.5038768420074
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.5656235011023982,
        "yaw": 65.5038768420074,
        "pitch": -2.6694792102593334,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_3_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.485088876307796,
        "roll": 0,
        "pitch": -12.48492268588927,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -121.62887729285372
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_0_HS_3_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.485088876307796,
        "yaw": -121.62887729285372,
        "pitch": -12.48492268588927,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 75.6,
      "id": "panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Jardim 1",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DE804F_2C75_502A_41C5_7B83319B18D7",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.9301509946905103,
   "class": "PanoramaCameraPosition",
   "yaw": 79.79617834394904
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4836614950815314,
        "roll": 0,
        "pitch": -11.679316056545394,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -149.40871229457042
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4836614950815314,
        "yaw": -149.40871229457042,
        "pitch": -11.679316056545394,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_3C1B0709_2C97_5016_41C1_EEFC36903733, this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, {'paddingTop':5,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedIconLineWidth':5,'pressedBorderColor':'#000000','pressedIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconWidth':20,'pressedBorderSize':0,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_3E394B97_2C95_D03A_41C5_0C59BD1EE8C3, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_0_HS_1_0_0_map.gif",
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 67
          }
         ]
        },
        "hfov": 8.08293417991639,
        "roll": 0,
        "pitch": -1.2311560710576699,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -34.25059334311367
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_0_HS_1_0.png",
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.08293417991639,
        "yaw": -34.25059334311367,
        "pitch": -1.2311560710576699,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_3C1B0709_2C97_5016_41C1_EEFC36903733_0_4.jpg",
         "height": 340,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_3C1B0709_2C97_5016_41C1_EEFC36903733_0_3.jpg",
         "height": 681,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "rotationX": 0,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": -34.25059334311367,
      "rotationY": 0,
      "showDuration": 500,
      "hfov": 8.08293417991639,
      "id": "popup_3C1B0709_2C97_5016_41C1_EEFC36903733",
      "pitch": -1.2311560710576699,
      "popupMaxHeight": "95%",
      "hideEasing": "cubic_out"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 74.7,
      "id": "panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Jardim 2",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -5.951894710359992,
   "class": "PanoramaCameraPosition",
   "yaw": 180
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.0426317501634603,
        "roll": 0,
        "pitch": -31.205161295250406,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -91.35031906181621
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.0426317501634603,
        "yaw": -91.35031906181621,
        "pitch": -31.205161295250406,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.050372185522739,
        "roll": 0,
        "pitch": -30.96369097683744,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.5612981487466444
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.050372185522739,
        "yaw": 1.5612981487466444,
        "pitch": -30.96369097683744,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 77.4,
      "id": "panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Sal\u00e3o Biblioteca",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_t.jpg",
  "hfovMax": 120,
  "id": "panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -9.163516306555456,
   "class": "PanoramaCameraPosition",
   "yaw": -91.28407643312102
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.32043829312716,
        "roll": 0,
        "pitch": -21.451273892488448,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -0.8815513595873975
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.32043829312716,
        "yaw": -0.8815513595873975,
        "pitch": -21.451273892488448,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4038073086077483,
        "roll": 0,
        "pitch": -17.42734430760863,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 104.48905113988017
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4038073086077483,
        "yaw": 104.48905113988017,
        "pitch": -17.42734430760863,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.382829653773234,
        "roll": 0,
        "pitch": -18.519176405037737,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -151.4839400243232
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.382829653773234,
        "yaw": -151.4839400243232,
        "pitch": -18.519176405037737,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_3C703744_2C95_301E_41B4_D3DFFE07C52D, this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, {'paddingTop':5,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedIconLineWidth':5,'pressedBorderColor':'#000000','pressedIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconWidth':20,'pressedBorderSize':0,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_3E3D9B9C_2C95_D02E_41AD_21DEFBDDDB2D, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_3_0_0_map.gif",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "hfov": 6.485625639104879,
        "roll": 0,
        "pitch": 0.9334708402939338,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -106.5272986188982
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_3_0.png",
           "height": 108,
           "class": "ImageResourceLevel",
           "width": 108
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.485625639104879,
        "yaw": -106.5272986188982,
        "pitch": 0.9334708402939338,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_4_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.398678479939172,
        "roll": 0,
        "pitch": -17.70030233196592,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 149.8529137685471
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_0_HS_4_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.398678479939172,
        "yaw": 149.8529137685471,
        "pitch": -17.70030233196592,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_3C703744_2C95_301E_41B4_D3DFFE07C52D_0_4.jpg",
         "height": 340,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_3C703744_2C95_301E_41B4_D3DFFE07C52D_0_3.jpg",
         "height": 681,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "rotationX": 0,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": -106.5272986188982,
      "rotationY": 0,
      "showDuration": 500,
      "hfov": 6.485625639104879,
      "id": "popup_3C703744_2C95_301E_41B4_D3DFFE07C52D",
      "pitch": 0.9334708402939338,
      "popupMaxHeight": "95%",
      "hideEasing": "cubic_out"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 72,
      "id": "panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Sal\u00e3o",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -12.840764331210192,
   "class": "PanoramaCameraPosition",
   "yaw": 175.87261146496814
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.2078299878563903,
        "roll": 0,
        "pitch": -25.610059296643474,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 90.13138673699964
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.2078299878563903,
        "yaw": 90.13138673699964,
        "pitch": -25.610059296643474,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.298972049701073,
        "roll": 0,
        "pitch": -21.970332726156503,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 161.09678856628244
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.298972049701073,
        "yaw": 161.09678856628244,
        "pitch": -21.970332726156503,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_2_0_0_map.gif",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 37
          }
         ]
        },
        "hfov": 3.6522261383091776,
        "roll": 0,
        "pitch": -36.22735913546721,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -86.73892738177379
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_2_0.png",
           "height": 75,
           "class": "ImageResourceLevel",
           "width": 75
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.6522261383091776,
        "yaw": -86.73892738177379,
        "pitch": -36.22735913546721,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_3_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.549049820786509,
        "roll": 0,
        "pitch": -3.9058421306192117,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -12.495364541750247
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_3_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.549049820786509,
        "yaw": -12.495364541750247,
        "pitch": -3.9058421306192117,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_4_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4121269882458254,
        "roll": 0,
        "pitch": -16.425786107724264,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20.89786834821527
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_4_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4121269882458254,
        "yaw": -20.89786834821527,
        "pitch": -16.425786107724264,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 23)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_5_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "hfov": 3.1628147815405616,
        "roll": 0,
        "pitch": -14.45836633989347,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 27.941414666359933
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_0_HS_5_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1628147815405616,
        "yaw": 27.941414666359933,
        "pitch": -14.45836633989347,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 70.2,
      "id": "panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Entrada",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C1668B_2C6B_D02A_419E_2AD42486C732",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -9.163516306555456,
   "class": "PanoramaCameraPosition",
   "yaw": 89.88535031847134
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.1693476478076525,
        "roll": 0,
        "pitch": -27.38976910132591,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 78.15494627629228
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1693476478076525,
        "yaw": 78.15494627629228,
        "pitch": -27.38976910132591,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.0951254609834646,
        "roll": 0,
        "pitch": -29.876160048862307,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -45.21278511620507
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.0951254609834646,
        "yaw": -45.21278511620507,
        "pitch": -29.876160048862307,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 75.6,
      "id": "panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Cozinha",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -18.79836952467942,
   "class": "PanoramaCameraPosition",
   "yaw": 175.87261146496814
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.128486709917433,
        "roll": 0,
        "pitch": -28.726458943019455,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 54.293337923911174
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.128486709917433,
        "yaw": 54.293337923911174,
        "pitch": -28.726458943019455,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 69.3,
      "id": "panorama_29C1FE51_2C6C_F036_4194_1178B4425204_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Sala de Cozinha",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C1FE51_2C6C_F036_4194_1178B4425204_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C1FE51_2C6C_F036_4194_1178B4425204",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C1FE51_2C6C_F036_4194_1178B4425204_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -20.636942675159236,
   "class": "PanoramaCameraPosition",
   "yaw": 172.43312101910828
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.4182748722031078,
        "roll": 0,
        "pitch": -15.378451389387594,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 167.84699541730208
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4182748722031078,
        "yaw": 167.84699541730208,
        "pitch": -15.378451389387594,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.188092345472135,
        "roll": 0,
        "pitch": -25.93805516373422,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -72.01382358884236
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.188092345472135,
        "yaw": -72.01382358884236,
        "pitch": -25.93805516373422,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.489603544998422,
        "roll": 0,
        "pitch": -10.161317753684441,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -137.17979195663372
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.489603544998422,
        "yaw": -137.17979195663372,
        "pitch": -10.161317753684441,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 75.6,
      "id": "panorama_29C01674_2C6D_50FE_41C3_300C359DF450_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Corredor Quartos",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C01674_2C6D_50FE_41C3_300C359DF450_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C01674_2C6D_50FE_41C3_300C359DF450",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C01674_2C6D_50FE_41C3_300C359DF450_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -9.622325273997156,
   "class": "PanoramaCameraPosition",
   "yaw": 167.84713375796179
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.830493696359078,
        "roll": 0,
        "pitch": -37.22604098685391,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -5.5231828568214505
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.830493696359078,
        "yaw": -5.5231828568214505,
        "pitch": -37.22604098685391,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.0684374900459064,
        "roll": 0,
        "pitch": -30.323135287239136,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 44.812478292323355
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.0684374900459064,
        "yaw": 44.812478292323355,
        "pitch": -30.323135287239136,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.1788558406002707,
        "roll": 0,
        "pitch": -26.587245363708377,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -113.21315155038046
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1788558406002707,
        "yaw": -113.21315155038046,
        "pitch": -26.587245363708377,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 71.10000000000001,
      "id": "panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Hall 1\u00ba Andar",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -7.3283049115499335,
   "class": "PanoramaCameraPosition",
   "yaw": -19.719745222929937
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.814709469743502,
        "roll": 0,
        "pitch": -37.604548301783346,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -163.2130887993191
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.814709469743502,
        "yaw": -163.2130887993191,
        "pitch": -37.604548301783346,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.397616898626103,
        "roll": 0,
        "pitch": -16.999160599541426,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 3.764330470638804
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.397616898626103,
        "yaw": 3.764330470638804,
        "pitch": -16.999160599541426,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.098533711057361,
        "roll": 0,
        "pitch": -29.293159228079624,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 118.11407898197767
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.098533711057361,
        "yaw": 118.11407898197767,
        "pitch": -29.293159228079624,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_3_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.0918050448011942,
        "roll": 0,
        "pitch": -29.51417844681871,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 87.38422168025494
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_0_HS_3_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.0918050448011942,
        "yaw": 87.38422168025494,
        "pitch": -29.51417844681871,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 72.9,
      "id": "panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Hall Quartos",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.043077309310862,
        "roll": 0,
        "pitch": -31.123228254501022,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -6.902043836771893
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.043077309310862,
        "yaw": -6.902043836771893,
        "pitch": -31.123228254501022,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.7612791318830334,
        "roll": 0,
        "pitch": -39.03293549860191,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -57.02297107532388
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.7612791318830334,
        "yaw": -57.02297107532388,
        "pitch": -39.03293549860191,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.9911935841830903,
        "roll": 0,
        "pitch": -32.705169703321204,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 160.58937672370976
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.9911935841830903,
        "yaw": 160.58937672370976,
        "pitch": -32.705169703321204,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 71.10000000000001,
      "id": "panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Closet Sweet1",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -14.21035207720212,
   "class": "PanoramaCameraPosition",
   "yaw": -8.713375796178344
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_3C0612DA_2C95_302A_418A_672CCC8C92E7, this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, {'paddingTop':5,'rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBackgroundColorDirection':'vertical','paddingLeft':5,'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedIconLineWidth':5,'pressedBorderColor':'#000000','pressedIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconWidth':20,'pressedBorderSize':0,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'borderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_3E3D2BA4_2C95_D01E_41B8_AA5312019666, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_0_HS_0_0_0_map.gif",
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53
          }
         ]
        },
        "hfov": 5.75782151499477,
        "roll": 0,
        "pitch": -27.098694761934855,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 176.47602549312558
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_0_HS_0_0.png",
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 107
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.75782151499477,
        "yaw": 176.47602549312558,
        "pitch": -27.098694761934855,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_3C0612DA_2C95_302A_418A_672CCC8C92E7_0_4.jpg",
         "height": 340,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_3C0612DA_2C95_302A_418A_672CCC8C92E7_0_3.jpg",
         "height": 680,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "rotationX": 0,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": 176.47602549312558,
      "rotationY": 0,
      "showDuration": 500,
      "hfov": 5.75782151499477,
      "id": "popup_3C0612DA_2C95_302A_418A_672CCC8C92E7",
      "pitch": -27.098694761934855,
      "popupMaxHeight": "95%",
      "hideEasing": "cubic_out"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.354018956365993,
        "roll": 0,
        "pitch": -19.46383605181496,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 35.504971915955906
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.354018956365993,
        "yaw": 35.504971915955906,
        "pitch": -19.46383605181496,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.369411166993595,
        "roll": 0,
        "pitch": -18.70560358474325,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -36.495028084044094
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.369411166993595,
        "yaw": -36.495028084044094,
        "pitch": -18.70560358474325,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 77.4,
      "id": "panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Varanda Sweet 1",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -14.21035024343404,
   "class": "PanoramaCameraPosition",
   "yaw": -170.828025477707
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.1816785705070028,
        "roll": 0,
        "pitch": -26.895362731152208,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -37.08358463726885
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1816785705070028,
        "yaw": -37.08358463726885,
        "pitch": -26.895362731152208,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.135252107676677,
        "roll": 0,
        "pitch": -28.499573257468,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 58.752204836415366
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.135252107676677,
        "yaw": 58.752204836415366,
        "pitch": -28.499573257468,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.1862907680562453,
        "roll": 0,
        "pitch": -26.731152204836423,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 130.2469416785206
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1862907680562453,
        "yaw": 130.2469416785206,
        "pitch": -26.731152204836423,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 74.7,
      "id": "panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Quarto Sweet 1",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -5.044585987261146,
   "class": "PanoramaCameraPosition",
   "yaw": 93.09554140127389
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.1767939825858185,
        "roll": 0,
        "pitch": -26.517636637058796,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -10.302930557720453
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1767939825858185,
        "yaw": -10.302930557720453,
        "pitch": -26.517636637058796,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 81.9,
      "id": "panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Casa de Banho Sweet1",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 3.6687898089171975,
   "class": "PanoramaCameraPosition",
   "yaw": 93.55414012738854
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.1732518662446045,
        "roll": 0,
        "pitch": -27.789779399441315,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -133.77798878864726
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1732518662446045,
        "yaw": -133.77798878864726,
        "pitch": -27.789779399441315,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.949841233118272,
        "roll": 0,
        "pitch": -34.67624653054497,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 58.83369121607612
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.949841233118272,
        "yaw": 58.83369121607612,
        "pitch": -34.67624653054497,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.216934188459965,
        "roll": 0,
        "pitch": -26.25394860041821,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 117.43346531015574
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_0_HS_2_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.216934188459965,
        "yaw": 117.43346531015574,
        "pitch": -26.25394860041821,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 70.2,
      "id": "panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Quarto Sweet 2",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -5.03428100140127,
   "class": "PanoramaCameraPosition",
   "yaw": 62.36942675159236
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.7647185102953444,
        "roll": 0,
        "pitch": -38.804607257955915,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -179.40601251420955
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.7647185102953444,
        "yaw": -179.40601251420955,
        "pitch": -38.804607257955915,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 81,
      "id": "panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Varanda Quarto Sweet 2",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.22824119754354,
        "roll": 0,
        "pitch": -51.1831109957678,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -17.63789252307656
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.22824119754354,
        "yaw": -17.63789252307656,
        "pitch": -51.1831109957678,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 78.3,
      "id": "panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Casa de banho Sweet 2",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -7.3283049115499335,
   "class": "PanoramaCameraPosition",
   "yaw": -116.02547770700637
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.9792272041626124,
        "roll": 0,
        "pitch": -32.018599794905576,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -73.67810184181148
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_0_HS_0_0.png",
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 58
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.9792272041626124,
        "yaw": -73.67810184181148,
        "pitch": -32.018599794905576,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 19)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.5073225667059025,
        "roll": 0,
        "pitch": -44.47355561990888,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 71.39629216868427
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_0_HS_1_0.png",
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 58
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.5073225667059025,
        "yaw": 71.39629216868427,
        "pitch": -44.47355561990888,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 21)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_0_HS_2_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.5813565972229164,
        "roll": 0,
        "pitch": -42.72288576878029,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 160.82979510526272
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_0_HS_2_0.png",
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 58
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.5813565972229164,
        "yaw": 160.82979510526272,
        "pitch": -42.72288576878029,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 71.10000000000001,
      "id": "panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Closet Sweet 3",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -18.339618363297447,
   "class": "PanoramaCameraPosition",
   "yaw": -105.47770700636943
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.987053258979875,
        "roll": 0,
        "pitch": -32.28232979176117,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 5.55202540271317
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_0_HS_0_0.png",
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 58
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.987053258979875,
        "yaw": 5.55202540271317,
        "pitch": -32.28232979176117,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 76.5,
      "id": "panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Casa de Banho Sweet 3",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 5.503184713375796,
   "class": "PanoramaCameraPosition",
   "yaw": 91.26114649681529
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.2519770322722525,
        "roll": 0,
        "pitch": -25.136571826115027,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -15.424300888391745
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.2519770322722525,
        "yaw": -15.424300888391745,
        "pitch": -25.136571826115027,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 76.5,
      "id": "panorama_29DE10C9_2C74_D016_41B8_235635181613_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Quarto Sweet 4",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DE10C9_2C74_D016_41B8_235635181613_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DE10C9_2C74_D016_41B8_235635181613",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DE10C9_2C74_D016_41B8_235635181613_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.240978901239185,
        "roll": 0,
        "pitch": -23.909720163115495,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -36.4202708738196
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.240978901239185,
        "yaw": -36.4202708738196,
        "pitch": -23.909720163115495,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 71.10000000000001,
      "id": "panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Quarto Sweet 3",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_t.jpg",
  "hfovMax": 120,
  "id": "panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -8.704718542708918,
   "class": "PanoramaCameraPosition",
   "yaw": 176.78980891719746
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.7127689950383918,
        "roll": 0,
        "pitch": -40.2584172298163,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -92.00606067536509
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.7127689950383918,
        "yaw": -92.00606067536509,
        "pitch": -40.2584172298163,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_0_HS_1_0_0_map.gif",
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26
          }
         ]
        },
        "hfov": 3.0680960083337196,
        "roll": 0,
        "pitch": -18.30368797963763,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -86.66445585426935
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_0_HS_1_0.png",
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.0680960083337196,
        "yaw": -86.66445585426935,
        "pitch": -18.30368797963763,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_0_HS_2_0_0_map.gif",
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26
          }
         ]
        },
        "hfov": 2.856273258527225,
        "roll": 0,
        "pitch": -27.888700904454556,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -79.21081953254885
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_0_HS_2_0.png",
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 53
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.856273258527225,
        "yaw": -79.21081953254885,
        "pitch": -27.888700904454556,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 72.9,
      "id": "panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Casa de Banho Sweet 4",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29C096D2_2C6D_503A_41AD_9B8994775D44",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -14.21035207720212,
   "class": "PanoramaCameraPosition",
   "yaw": 106.85350318471338
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_u.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_0_HS_0_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 3.1949905072580624,
        "roll": 0,
        "pitch": -26.563925276453745,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -82.89692378463286
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_0_HS_0_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.1949905072580624,
        "yaw": -82.89692378463286,
        "pitch": -26.563925276453745,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "areas": [
       {
        "click": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_0_HS_1_0_0_map.gif",
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "hfov": 2.838113482719141,
        "roll": 0,
        "pitch": -37.38926208410924,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -176.415991444971
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_0_HS_1_0.png",
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.838113482719141,
        "yaw": -176.415991444971,
        "pitch": -37.38926208410924,
        "roll": 0
       }
      ],
      "class": "HotspotPanoramaOverlay"
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_cap0.png",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 288
        }
       ]
      },
      "inertia": false,
      "hfov": 72,
      "id": "panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_cap0",
      "angle": 0,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_d.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_r.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_l.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_f.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_b.jpeg",
       "height": 800,
       "class": "ImageResourceLevel",
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "label": "Escritorio",
  "class": "Panorama",
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_t.jpg",
  "hfovMax": 120,
  "id": "panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21",
  "pitch": 0
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -7.328298501739312,
   "class": "PanoramaCameraPosition",
   "yaw": -162.343949044586
  },
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784_camera",
    "media": "this.panorama_29DE3F92_2C75_503A_41C4_D7ECF2977784",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DE804F_2C75_502A_41C5_7B83319B18D7_camera",
    "media": "this.panorama_29DE804F_2C75_502A_41C5_7B83319B18D7",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F_camera",
    "media": "this.panorama_29DE67EB_2C75_FFEA_41C5_FC8BCF9FB68F",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04_camera",
    "media": "this.panorama_2A2E0CFA_2C6F_F1EA_4186_53EF5C582D04",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1_camera",
    "media": "this.panorama_29DEC519_2C77_7036_41C5_E5F1B29E42D1",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C1668B_2C6B_D02A_419E_2AD42486C732_camera",
    "media": "this.panorama_29C1668B_2C6B_D02A_419E_2AD42486C732",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E_camera",
    "media": "this.panorama_29C1BF22_2C6B_501A_41B4_ABAAB91CB77E",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C1FE51_2C6C_F036_4194_1178B4425204_camera",
    "media": "this.panorama_29C1FE51_2C6C_F036_4194_1178B4425204",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C01674_2C6D_50FE_41C3_300C359DF450_camera",
    "media": "this.panorama_29C01674_2C6D_50FE_41C3_300C359DF450",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0_camera",
    "media": "this.panorama_29C0BE55_2C6B_303E_419C_D69EFAACB0E0",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4_camera",
    "media": "this.panorama_29DEDF27_2C74_D01A_41B0_67D87910F9C4",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3_camera",
    "media": "this.panorama_29C04EDC_2C6D_D02E_41A9_B944EFA73AF3",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06_camera",
    "media": "this.panorama_29DD15F8_2C75_33F6_41C5_C7D8BACEEB06",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4_camera",
    "media": "this.panorama_29DE7E1B_2C77_502A_41B7_61FA10E2BDC4",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167_camera",
    "media": "this.panorama_29C08E18_2C6D_3036_41B3_123C8BDF6167",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0_camera",
    "media": "this.panorama_29DE36D1_2C77_3036_41C0_130D1973E1F0",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D_camera",
    "media": "this.panorama_29DD150F_2C74_D02A_41C0_39B3691FD83D",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3_camera",
    "media": "this.panorama_29D75DB0_2C6F_7076_41C2_0876B589DDE3",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4_camera",
    "media": "this.panorama_29C105DE_2C6B_302A_41B0_91D982B7E4D4",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA_camera",
    "media": "this.panorama_29C0F5BC_2C6C_F06E_41B7_7F0434A87CAA",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 19, 20)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DE10C9_2C74_D016_41B8_235635181613_camera",
    "media": "this.panorama_29DE10C9_2C74_D016_41B8_235635181613",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 20, 21)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387_camera",
    "media": "this.panorama_221401C3_2CEF_501A_41AD_6E1BC9A30387",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 21, 22)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29C096D2_2C6D_503A_41AD_9B8994775D44_camera",
    "media": "this.panorama_29C096D2_2C6D_503A_41AD_9B8994775D44",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 22, 23)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21_camera",
    "media": "this.panorama_29DE9E87_2C77_F01A_41BC_E4D593041A21",
    "begin": "this.setEndToItemIndex(this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889, 23, 0)"
   }
  ],
  "class": "PlayList",
  "id": "playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889"
 },
 {
  "levels": [
   {
    "url": "media/popup_3C1B0709_2C97_5016_41C1_EEFC36903733_0_0.jpg",
    "height": 2830,
    "class": "ImageResourceLevel",
    "width": 4250
   },
   {
    "url": "media/popup_3C1B0709_2C97_5016_41C1_EEFC36903733_0_1.jpg",
    "height": 2727,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_3C1B0709_2C97_5016_41C1_EEFC36903733_0_2.jpg",
    "height": 1363,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_3C1B0709_2C97_5016_41C1_EEFC36903733_0_3.jpg",
    "height": 681,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_3C1B0709_2C97_5016_41C1_EEFC36903733_0_4.jpg",
    "height": 340,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_3E394B97_2C95_D03A_41C5_0C59BD1EE8C3"
 },
 {
  "levels": [
   {
    "url": "media/popup_3C703744_2C95_301E_41B4_D3DFFE07C52D_0_0.jpg",
    "height": 2828,
    "class": "ImageResourceLevel",
    "width": 4251
   },
   {
    "url": "media/popup_3C703744_2C95_301E_41B4_D3DFFE07C52D_0_1.jpg",
    "height": 2724,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_3C703744_2C95_301E_41B4_D3DFFE07C52D_0_2.jpg",
    "height": 1362,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_3C703744_2C95_301E_41B4_D3DFFE07C52D_0_3.jpg",
    "height": 681,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_3C703744_2C95_301E_41B4_D3DFFE07C52D_0_4.jpg",
    "height": 340,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_3E3D9B9C_2C95_D02E_41AD_21DEFBDDDB2D"
 },
 {
  "levels": [
   {
    "url": "media/popup_3C0612DA_2C95_302A_418A_672CCC8C92E7_0_0.jpg",
    "height": 2827,
    "class": "ImageResourceLevel",
    "width": 4252
   },
   {
    "url": "media/popup_3C0612DA_2C95_302A_418A_672CCC8C92E7_0_1.jpg",
    "height": 2723,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_3C0612DA_2C95_302A_418A_672CCC8C92E7_0_2.jpg",
    "height": 1361,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_3C0612DA_2C95_302A_418A_672CCC8C92E7_0_3.jpg",
    "height": 680,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_3C0612DA_2C95_302A_418A_672CCC8C92E7_0_4.jpg",
    "height": 340,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_3E3D2BA4_2C95_D01E_41B8_AA5312019666"
 }
], "children": [
 {
  "shadow": false,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "minWidth": 100,
  "paddingTop": 0,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minHeight": 50,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "height": "100%",
  "id": "MainViewer",
  "width": "100%",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipOpacity": 1,
  "progressBorderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressHeight": 10,
  "toolTipBorderColor": "#767676",
  "progressBottom": 0,
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "toolTipBorderSize": 1,
  "progressRight": 0,
  "toolTipFontFamily": "Arial",
  "borderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingRight": 0,
  "toolTipFontSize": 12,
  "toolTipPaddingLeft": 6,
  "left": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingRight": 6,
  "top": 0,
  "playbackBarBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "toolTipShadowOpacity": 1,
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "progressLeft": 0,
  "playbackBarBottom": 5,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeight": 10,
  "playbackBarRight": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "borderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionMode": "blending",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "borderSize": 0,
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "left": 0,
  "layout": "horizontal",
  "right": 0,
  "bottom": 0,
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "minWidth": 20,
  "paddingTop": 0,
  "minHeight": 20,
  "class": "Container",
  "borderRadius": 0,
  "height": 200,
  "overflow": "visible",
  "verticalAlign": "bottom",
  "horizontalAlign": "center",
  "gap": 10,
  "children": [
   {
    "itemLabelFontSize": 14,
    "scrollBarColor": "#FFFFFF",
    "itemLabelHorizontalAlign": "center",
    "scrollBarOpacity": 0.5,
    "paddingLeft": 20,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "paddingRight": 20,
    "scrollBarMargin": 2,
    "itemHorizontalAlign": "center",
    "itemLabelGap": 5,
    "itemPaddingRight": 3,
    "layout": "horizontal",
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontStyle": "normal",
    "itemLabelPosition": "bottom",
    "shadow": false,
    "itemOpacity": 1,
    "backgroundColorDirection": "vertical",
    "itemThumbnailHeight": 75,
    "itemPaddingBottom": 3,
    "backgroundOpacity": 0.2,
    "itemLabelFontWeight": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "itemPaddingTop": 3,
    "itemThumbnailOpacity": 1,
    "itemMode": "normal",
    "itemThumbnailShadow": true,
    "paddingBottom": 10,
    "minWidth": 0,
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailShadowColor": "#000000",
    "paddingTop": 10,
    "minHeight": 0,
    "itemThumbnailShadowOpacity": 0.8,
    "itemThumbnailShadowSpread": 1,
    "itemLabelTextDecoration": "none",
    "class": "ThumbnailList",
    "width": 759,
    "borderRadius": 5,
    "itemThumbnailWidth": 100,
    "backgroundColor": [
     "#000000"
    ],
    "playList": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889",
    "itemPaddingLeft": 3,
    "maxHeight": 600,
    "itemThumbnailBorderRadius": 5,
    "maxWidth": 800,
    "itemBackgroundColorDirection": "vertical",
    "verticalAlign": "top",
    "horizontalAlign": "left",
    "selectedItemLabelFontWeight": "bold",
    "itemBackgroundOpacity": 0,
    "gap": 10,
    "itemVerticalAlign": "middle",
    "itemBackgroundColor": [],
    "itemThumbnailShadowVerticalLength": 3,
    "itemBackgroundColorRatios": [],
    "itemBorderRadius": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial"
   }
  ]
 },
 {
  "paddingLeft": 0,
  "borderSize": 0,
  "paddingRight": 0,
  "mode": "push",
  "left": "1.39%",
  "top": "2.25%",
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "minWidth": 1,
  "paddingTop": 0,
  "minHeight": 1,
  "maxWidth": 288,
  "iconURL": "skin/IconButton_3DB269F7_2CAD_D3F9_41C3_EFDA23A67DF8.png",
  "class": "IconButton",
  "width": 70,
  "borderRadius": 0,
  "height": 70,
  "id": "IconButton_3DB269F7_2CAD_D3F9_41C3_EFDA23A67DF8",
  "verticalAlign": "middle",
  "maxHeight": 288,
  "horizontalAlign": "center",
  "cursor": "hand",
  "transparencyActive": false
 },
 {
  "paddingLeft": 0,
  "borderSize": 0,
  "paddingRight": 0,
  "left": 0,
  "backgroundColorRatios": [
   0
  ],
  "top": 0,
  "bottom": 0,
  "right": 0,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.55,
  "paddingBottom": 0,
  "minWidth": 0,
  "paddingTop": 0,
  "minHeight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "class": "UIComponent",
  "borderRadius": 0,
  "id": "veilPopupPanorama",
  "visible": false,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  }
 },
 {
  "paddingLeft": 0,
  "borderSize": 0,
  "paddingRight": 0,
  "left": 0,
  "backgroundColorRatios": [],
  "top": 0,
  "bottom": 0,
  "right": 0,
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "scaleMode": "custom",
  "paddingBottom": 0,
  "minWidth": 0,
  "paddingTop": 0,
  "minHeight": 0,
  "backgroundColor": [],
  "class": "ZoomImage",
  "borderRadius": 0,
  "id": "zoomImagePopupPanorama",
  "visible": false
 },
 {
  "rollOverIconColor": "#666666",
  "paddingLeft": 5,
  "textDecoration": "none",
  "shadowSpread": 1,
  "borderSize": 0,
  "fontStyle": "normal",
  "paddingRight": 5,
  "fontFamily": "Arial",
  "iconColor": "#000000",
  "mode": "push",
  "layout": "horizontal",
  "backgroundColorRatios": [
   0,
   0.09803921568627451,
   1
  ],
  "top": 10,
  "borderColor": "#000000",
  "right": 10,
  "shadow": false,
  "iconBeforeLabel": true,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.3,
  "label": "",
  "paddingBottom": 5,
  "minWidth": 0,
  "iconLineWidth": 5,
  "paddingTop": 5,
  "minHeight": 0,
  "shadowColor": "#000000",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconWidth": 20,
  "class": "CloseButton",
  "borderRadius": 0,
  "id": "closeButtonPopupPanorama",
  "fontWeight": "normal",
  "iconHeight": 20,
  "visible": false,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "fontSize": 12,
  "cursor": "hand",
  "fontColor": "#FFFFFF",
  "gap": 5,
  "pressedIconColor": "#888888",
  "shadowBlurRadius": 6
 }
], 
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "paddingBottom": 0,
 "minWidth": 20,
 "paddingTop": 0,
 "minHeight": 20,
 "mouseWheelEnabled": true,
 "class": "Player",
 "borderRadius": 0,
 "start": "this.playList_3E2E7B24_2C95_D01E_41C1_DC1BD6946889.set('selectedIndex', 0)",
 "overflow": "visible",
 "width": "100%",
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "scripts": {
  "pauseGlobalAudios": function(){    var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "setMediaBehaviour": function(playList, index, playListDispatcher, indexDispatcher){    var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       playList.set('selectedIndex', -1);       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player)           player.unbind('stateChange', stateChangeFunction, this);       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, this);       }       else{           viewerArea.set('visible', false);       }   };   if(indexDispatcher == undefined || indexDispatcher == -1){       indexDispatcher = playListDispatcher.get('selectedIndex');   }   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   playList.set('selectedIndex', index);   if(item.get('player') != itemDispatcher.get('player')){       var player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction();   };   this.pauseGlobalAudios();   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, currentPlayListToPause, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayList(currentPlayListToPause, containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   this.pausePlayList(currentPlayListToPause, containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, playListToPause, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   var showEndFunction = function() {       var loadedFunction = function(){           popupPanoramaOverlay.set('visible', false);       };       popupPanoramaOverlay.unbind('showEnd', showEndFunction, this);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', 1);       this.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, undefined, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);   };   var hideFunction = function() {       var restoreShowDurationFunction = function(){           popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, this);           popupPanoramaOverlay.set('visible', false);           popupPanoramaOverlay.set('showDuration', showDuration);           popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);           popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);       };       if(playListToPause){           self.resumePlayList(playListToPause, audio != null && stopBackgroundAudio);       }       var currentWidth = zoomImage.get('imageWidth');       var currentHeight = zoomImage.get('imageHeight');       popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, this, true);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', hideDuration);       popupPanoramaOverlay.set('popupMaxWidth', currentWidth);       popupPanoramaOverlay.set('popupMaxHeight', currentHeight);       popupPanoramaOverlay.set('visible', true);   };   if(!imageHD){       imageHD = popupPanoramaOverlay.get('image');   }   if(!toggleImageHD && toggleImage){       toggleImageHD = toggleImage;   }   var zoomImage = this.zoomImagePopupPanorama;   var showDuration = popupPanoramaOverlay.get('showDuration');   var hideDuration = popupPanoramaOverlay.get('hideDuration');   if(playListToPause){       this.pausePlayList(playListToPause, audio != null && stopBackgroundAudio);   }   var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');   var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "updatePlayListsUI": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');                          };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, this);           playList.unbind('change', changePlayListFunction, this);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var camera = playListItem.get('camera');       if(camera){           var endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "resumePlayList": function(playList, containsAudio){    if(playList){       var player = playList.get('items')[playList.get('selectedIndex')].get('player');       if(player){           if(!containsAudio && typeof player.resumeCamera !== 'undefined'){               player.resumeCamera();           }           else{               player.play();           }       }   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "resumeGlobalAudios": function(){    var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "startPanoramaWithCamera": function(playList, index, camera){    var playListItem = playList.get('items')[index];   var previousCamera = playListItem.get('camera');   playListItem.set('camera', camera);   var restoreCameraOnStop = function(){       playListItem.set('camera', previousCamera);       playListItem.unbind('stop', restoreCameraOnStop, this);   };   playListItem.bind('stop', restoreCameraOnStop, this);   playList.set('selectedIndex', index); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var rollOutFunction = function(){       var rollOverFunction = function(){           clearTimeout(timeoutID);           dispose();       };       var timeoutFunction = function(){           setVisibility(false);           dispose();       };       var dispose = function(){           parentComponent.unbind('rollOver', rollOverFunction, this);       };       parentComponent.unbind('rollOut', rollOutFunction, this);       parentComponent.bind('rollOver', rollOverFunction, this);       var timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);   };   var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   parentComponent.bind('rollOut', rollOutFunction, this);   setVisibility(true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, playListToPause, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       if(playListToPause){           self.resumePlayList(playListToPause, audio != null && stopBackgroundAudio);       }       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   if(playListToPause){       this.pausePlayList(playListToPause, audio != null && stopBackgroundAudio);   }   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);   zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pausePlayList": function(playList, containsAudio){    if(playList){       var player = playList.get('items')[playList.get('selectedIndex')].get('player');       if(player){           if(!containsAudio && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   console.log('state' + state);   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       console.log('playing');       button.set('pressed', true);   } }
 }
})