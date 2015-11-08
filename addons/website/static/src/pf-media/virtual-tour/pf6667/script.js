TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 28
          }
         ]
        },
        "yaw": 62.44492236045858,
        "hfov": 3.0754213024756467,
        "pitch": -25.777584949018813,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.0754213024756467,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 56
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 62.44492236045858,
        "pitch": -25.777584949018813
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 172.1246519730112,
        "hfov": 3.5145784843979517,
        "pitch": -9.149410829269202,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.5145784843979517,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 172.1246519730112,
        "pitch": -9.149410829269202
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 3)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 73.8,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4236C555_4784_DB89_41C0_4B8B63A2D324",
  "vfov": 180,
  "label": "Entrada",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -1.3638636823998627,
   "yaw": 171.05732484076432
  },
  "id": "panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 124.20154679111155,
        "hfov": 3.4498214623482766,
        "pitch": -13.49343914072895,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.4498214623482766,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 124.20154679111155,
        "pitch": -13.49343914072895
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 2)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 174.1015453848836,
        "hfov": 3.3039748285702135,
        "pitch": -21.36366098573374,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.3039748285702135,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 174.1015453848836,
        "pitch": -21.36366098573374
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 17)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -121.3371593511054,
        "hfov": 3.3927131497018936,
        "pitch": -17.00101029559805,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.3927131497018936,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -121.3371593511054,
        "pitch": -17.00101029559805
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 16)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42372A98_4784_EE87_41D1_7A0216184E69_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 65.7,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42372A98_4784_EE87_41D1_7A0216184E69_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42372A98_4784_EE87_41D1_7A0216184E69",
  "vfov": 180,
  "label": "Piscina",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.4585987261146497,
   "yaw": 104.10191082802548
  },
  "id": "panorama_42372A98_4784_EE87_41D1_7A0216184E69_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 30
          }
         ]
        },
        "yaw": 135.20971787041344,
        "hfov": 3.2080429999334252,
        "pitch": -28.73351758246513,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.2080429999334252,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 60,
           "width": 60
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 135.20971787041344,
        "pitch": -28.73351758246513
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 30
          }
         ]
        },
        "yaw": 109.21060643146028,
        "hfov": 3.4209205528763014,
        "pitch": -20.76351423599684,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.4209205528763014,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 60,
           "width": 60
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 109.21060643146028,
        "pitch": -20.76351423599684
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 5)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42378374_4784_7F8F_41C0_4378A6B274C4_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 86.39999999999999,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42378374_4784_7F8F_41C0_4378A6B274C4_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42378374_4784_7F8F_41C0_4378A6B274C4",
  "vfov": 180,
  "label": "Piscina",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -13.75147684304539,
   "yaw": 173.35031847133757
  },
  "id": "panorama_42378374_4784_7F8F_41C0_4378A6B274C4_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 79.45920236857643,
        "hfov": 3.302115208954739,
        "pitch": -21.65406737354068,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.302115208954739,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 79.45920236857643,
        "pitch": -21.65406737354068
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 0)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 127.40225331779966,
        "hfov": 3.35469586400045,
        "pitch": -19.225782974813793,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.35469586400045,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 127.40225331779966,
        "pitch": -19.225782974813793
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 16)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -71.30790590402727,
        "hfov": 3.5525799778006832,
        "pitch": 0.6986018352530049,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.5525799778006832,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -71.30790590402727,
        "pitch": 0.6986018352530049
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 4)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -133.03791955664494,
        "hfov": 3.4666890342013863,
        "pitch": -12.64362013577387,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.4666890342013863,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -133.03791955664494,
        "pitch": -12.64362013577387
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 5)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -113.28147716159775,
        "hfov": 3.3430714761845652,
        "pitch": -19.78719815551539,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.3430714761845652,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -113.28147716159775,
        "pitch": -19.78719815551539
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 20)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42369387_4785_DE89_41C6_0F20C46A6115_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 74.7,
      "rotate": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ]
        },
        "yaw": -119.34492333438922,
        "hfov": 4.839165620249676,
        "pitch": 2.7604376253166683,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 4.839165620249676,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_0_HS_5_0.png",
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 80
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -119.34492333438922,
        "pitch": 2.7604376253166683
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_5744B3C9_479C_DE99_41CF_B5AA77424262, this.playList_5735A507_478C_FB89_41A0_E697249E4373, {'iconColor':'#000000','paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'borderSize':0,'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverIconHeight':20,'pressedIconLineWidth':5,'rollOverIconLineWidth':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingBottom':5,'iconWidth':20,'rollOverIconWidth':20,'iconHeight':20,'rollOverBorderSize':0,'paddingTop':5,'rollOverBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundOpacity':0.3}, this.ImageResource_57212530_478C_FB87_41C4_5733BEAF4409, null, null, null, null, false)"
       }
      ]
     },
     {
      "hfov": 4.839165620249676,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_5744B3C9_479C_DE99_41CF_B5AA77424262_0_4.jpg",
         "class": "ImageResourceLevel",
         "height": 340,
         "width": 512
        },
        {
         "url": "media/popup_5744B3C9_479C_DE99_41CF_B5AA77424262_0_3.jpg",
         "class": "ImageResourceLevel",
         "height": 681,
         "width": 1024
        }
       ]
      },
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "showDuration": 500,
      "showEasing": "cubic_in",
      "rotationY": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "id": "popup_5744B3C9_479C_DE99_41CF_B5AA77424262",
      "hideEasing": "cubic_out",
      "yaw": -119.34492333438922,
      "hideDuration": 500,
      "pitch": 2.7604376253166683,
      "popupMaxHeight": "95%"
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42369387_4785_DE89_41C6_0F20C46A6115_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42369387_4785_DE89_41C6_0F20C46A6115",
  "vfov": 180,
  "label": "Hall Entrada",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 3.210191082802548,
   "yaw": 180
  },
  "id": "panorama_42369387_4785_DE89_41C6_0F20C46A6115_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 66.0222032610497,
        "hfov": 2.883367592404781,
        "pitch": -36.34628211606855,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.883367592404781,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 66.0222032610497,
        "pitch": -36.34628211606855
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 3)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -63.63355306440324,
        "hfov": 3.3194411224678992,
        "pitch": -21.98772583264752,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.3194411224678992,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -63.63355306440324,
        "pitch": -21.98772583264752
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 13)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -53.4165371575217,
        "hfov": 3.297681520577273,
        "pitch": -22.899959395761943,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.297681520577273,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -53.4165371575217,
        "pitch": -22.899959395761943
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 14)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -46.666008790474976,
        "hfov": 3.160547536472763,
        "pitch": -28.00846734920271,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.160547536472763,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -46.666008790474976,
        "pitch": -28.00846734920271
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 11)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -177.2978550284603,
        "hfov": 3.511361746520308,
        "pitch": -11.223369787897331,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.511361746520308,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -177.2978550284603,
        "pitch": -11.223369787897331
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 8)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_41C01665_4784_B989_419D_F36CC1B5C355_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 76.5,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_41C01665_4784_B989_419D_F36CC1B5C355_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_41C01665_4784_B989_419D_F36CC1B5C355",
  "vfov": 180,
  "label": "Corredor 1\u00ba andar",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -10.547770700636942,
   "yaw": 163.2611464968153
  },
  "id": "panorama_41C01665_4784_B989_419D_F36CC1B5C355_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": 79.55820673933597,
        "hfov": 2.6644180020495214,
        "pitch": -38.69489787443695,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.6644180020495214,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 79.55820673933597,
        "pitch": -38.69489787443695
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 2)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": 133.0910946967913,
        "hfov": 3.0559764790218167,
        "pitch": -26.46779388691864,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.0559764790218167,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 133.0910946967913,
        "pitch": -26.46779388691864
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 6)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": -29.94004145145769,
        "hfov": 2.8552991864098387,
        "pitch": -33.23802090572605,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.8552991864098387,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -29.94004145145769,
        "pitch": -33.23802090572605
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 18)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": -40.853795388879476,
        "hfov": 3.341888495964564,
        "pitch": -11.780470791473055,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.341888495964564,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -40.853795388879476,
        "pitch": -11.780470791473055
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 17)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": -134.45310881829343,
        "hfov": 3.2588267303071228,
        "pitch": -17.32983720033159,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.2588267303071228,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -134.45310881829343,
        "pitch": -17.32983720033159
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 3)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": -138.7504796984468,
        "hfov": 3.410887022446223,
        "pitch": -2.3643061020003566,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.410887022446223,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_0_HS_5_0.png",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 56
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -138.7504796984468,
        "pitch": -2.3643061020003566
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 20)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42355A09_4787_E999_41A3_4FA77691824B_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 77.4,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42355A09_4787_E999_41A3_4FA77691824B_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42355A09_4787_E999_41A3_4FA77691824B",
  "vfov": 180,
  "label": "Cozinha",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -2.751592356687898,
   "yaw": 142.62420382165604
  },
  "id": "panorama_42355A09_4787_E999_41A3_4FA77691824B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -172.87440601681877,
        "hfov": 3.077316839485496,
        "pitch": -30.038453788188786,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.077316839485496,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -172.87440601681877,
        "pitch": -30.038453788188786
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 18)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42366D7B_4784_6A79_41C0_A223A151D697_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 68.4,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42366D7B_4784_6A79_41C0_A223A151D697_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42366D7B_4784_6A79_41C0_A223A151D697",
  "vfov": 180,
  "label": "Cozinha",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -7.787108055926747,
   "yaw": -170.14012738853503
  },
  "id": "panorama_42366D7B_4784_6A79_41C0_A223A151D697_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -61.071646778343705,
        "hfov": 2.89065209057727,
        "pitch": -35.10075532113695,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.89065209057727,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -61.071646778343705,
        "pitch": -35.10075532113695
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 10)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 73.67348540072435,
        "hfov": 3.002892042023746,
        "pitch": -31.79817855204215,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.002892042023746,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 73.67348540072435,
        "pitch": -31.79817855204215
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 8)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 177.5338306908782,
        "hfov": 3.3443814035299955,
        "pitch": -18.81563539077291,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.3443814035299955,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 177.5338306908782,
        "pitch": -18.81563539077291
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 9)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 73.8,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF",
  "vfov": 180,
  "label": "Closet Quarto Sweet Entrada",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "id": "panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -27.00975072362142,
        "hfov": 3.4849950520157633,
        "pitch": -10.792742155021285,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.4849950520157633,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -27.00975072362142,
        "pitch": -10.792742155021285
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 9)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 27.85953890956563,
        "hfov": 3.4706651186454605,
        "pitch": -11.965719843141683,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.4706651186454605,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 27.85953890956563,
        "pitch": -11.965719843141683
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 7)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 79.2,
      "rotate": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ]
        },
        "yaw": -171.1606964941333,
        "hfov": 4.8156356625050245,
        "pitch": 5.491906685216106,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 4.8156356625050245,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 80
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -171.1606964941333,
        "pitch": 5.491906685216106
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23, this.playList_5735A507_478C_FB89_41A0_E697249E4373, {'iconColor':'#000000','paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'borderSize':0,'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverIconHeight':20,'pressedIconLineWidth':5,'rollOverIconLineWidth':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingBottom':5,'iconWidth':20,'rollOverIconWidth':20,'iconHeight':20,'rollOverBorderSize':0,'paddingTop':5,'rollOverBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundOpacity':0.3}, this.ImageResource_5725853A_478C_FBFB_41C0_6B3FAA5CFAAB, null, null, null, null, false)"
       }
      ]
     },
     {
      "hfov": 4.8156356625050245,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23_0_4.jpg",
         "class": "ImageResourceLevel",
         "height": 340,
         "width": 512
        },
        {
         "url": "media/popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23_0_3.jpg",
         "class": "ImageResourceLevel",
         "height": 680,
         "width": 1024
        }
       ]
      },
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "showDuration": 500,
      "showEasing": "cubic_in",
      "rotationY": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "id": "popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23",
      "hideEasing": "cubic_out",
      "yaw": -171.1606964941333,
      "hideDuration": 500,
      "pitch": 5.491906685216106,
      "popupMaxHeight": "95%"
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4237FF85_4784_A689_41D0_068D83FFB0BD",
  "vfov": 180,
  "label": "Quarto Sweet ",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "id": "panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -77.65349277152744,
        "hfov": 2.8718306180416078,
        "pitch": -35.95492828110413,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.8718306180416078,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -77.65349277152744,
        "pitch": -35.95492828110413
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 8)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 75.66861249163044,
        "hfov": 2.8209495284880086,
        "pitch": -37.33177038636728,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.8209495284880086,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 75.66861249163044,
        "pitch": -37.33177038636728
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 4)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 177.47913880741993,
        "hfov": 3.0722738632045785,
        "pitch": -30.0054545968936,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.0722738632045785,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 177.47913880741993,
        "pitch": -30.0054545968936
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 7)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 72,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88",
  "vfov": 180,
  "label": "Quarto Sweet Closet",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -6.8789808917197455,
   "yaw": -174.72611464968153
  },
  "id": "panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -95.36336187159073,
        "hfov": 3.2332490088303105,
        "pitch": -24.556016353922654,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.2332490088303105,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -95.36336187159073,
        "pitch": -24.556016353922654
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 7)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 64.8,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_423DD9E9_4785_AA99_419F_C404E3EB5270",
  "vfov": 180,
  "label": "Casa de Banho Sweet",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -1.8226671790281834,
   "yaw": 83.92356687898089
  },
  "id": "panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -150.26156727676414,
        "hfov": 3.0917712621615854,
        "pitch": -29.98406795798996,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.0917712621615854,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -150.26156727676414,
        "pitch": -29.98406795798996
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 12)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -50.88893569781675,
        "hfov": 3.171774215568637,
        "pitch": -27.304981556656994,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.171774215568637,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -50.88893569781675,
        "pitch": -27.304981556656994
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 4)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4238A245_478C_5989_41B0_AA3F71503CAE_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 73.8,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238A245_478C_5989_41B0_AA3F71503CAE_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4238A245_478C_5989_41B0_AA3F71503CAE",
  "vfov": 180,
  "label": "Quarto",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -7.328299455278298,
   "yaw": 148.35668789808918
  },
  "id": "panorama_4238A245_478C_5989_41B0_AA3F71503CAE_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 2.8861701116805603,
        "hfov": 2.422163404486589,
        "pitch": -47.26778706062751,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.422163404486589,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 2.8861701116805603,
        "pitch": -47.26778706062751
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 11)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_423746A2_4783_A68B_41C1_1310A9494AAC_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 72.9,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423746A2_4783_A68B_41C1_1310A9494AAC_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_423746A2_4783_A68B_41C1_1310A9494AAC",
  "vfov": 180,
  "label": "Quarto Varanda",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -11.916327483038748,
   "yaw": 166.47133757961782
  },
  "id": "panorama_423746A2_4783_A68B_41C1_1310A9494AAC_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 22.49466779170741,
        "hfov": 3.3073763539335266,
        "pitch": -21.7093710574532,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.3073763539335266,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 22.49466779170741,
        "pitch": -21.7093710574532
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 4)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -172.32045518420077,
        "hfov": 3.1711995498648964,
        "pitch": -27.023684277148174,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.1711995498648964,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -172.32045518420077,
        "pitch": -27.023684277148174
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 15)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4238FC47_478C_E989_41CB_7FA768BBF334_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 70.2,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4238FC47_478C_E989_41CB_7FA768BBF334_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4238FC47_478C_E989_41CB_7FA768BBF334",
  "vfov": 180,
  "label": "Quarto",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.493090915316174,
   "yaw": 150.87898089171975
  },
  "id": "panorama_4238FC47_478C_E989_41CB_7FA768BBF334_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 8.647764383514424,
        "hfov": 3.305859975834946,
        "pitch": -20.227041078743714,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.305859975834946,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 8.647764383514424,
        "pitch": -20.227041078743714
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 4)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 161.01580312443454,
        "hfov": 2.9723443685490456,
        "pitch": -32.4707724437025,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.9723443685490456,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 161.01580312443454,
        "pitch": -32.4707724437025
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 15)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42381904_478C_6B8F_41C6_16336FF98183_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 67.5,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42381904_478C_6B8F_41C6_16336FF98183_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42381904_478C_6B8F_41C6_16336FF98183",
  "vfov": 180,
  "label": "Quarto",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -8.704728250961177,
   "yaw": -171.97452229299364
  },
  "id": "panorama_42381904_478C_6B8F_41C6_16336FF98183_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": -55.364928239011725,
        "hfov": 2.8208708742091373,
        "pitch": -35.43480201762716,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.8208708742091373,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 57
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -55.364928239011725,
        "pitch": -35.43480201762716
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 14)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 28
          }
         ]
        },
        "yaw": 47.65486936619867,
        "hfov": 2.6144897607262454,
        "pitch": -40.96021106349588,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.6144897607262454,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 57
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 47.65486936619867,
        "pitch": -40.96021106349588
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 13)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4239E6CA_478C_E69B_41BF_95A54096F235_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 72.9,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4239E6CA_478C_E69B_41BF_95A54096F235_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4239E6CA_478C_E69B_41BF_95A54096F235",
  "vfov": 180,
  "label": "Quarto",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -1.8343949044585988,
   "yaw": -177.01910828025478
  },
  "id": "panorama_4239E6CA_478C_E69B_41BF_95A54096F235_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -71.91260875966111,
        "hfov": 3.490009998840098,
        "pitch": -11.572832368216568,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.490009998840098,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -71.91260875966111,
        "pitch": -11.572832368216568
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 3)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -163.64505545083506,
        "hfov": 3.4580667025071716,
        "pitch": -13.903030418814149,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.4580667025071716,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -163.64505545083506,
        "pitch": -13.903030418814149
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 17)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 76.5,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2",
  "vfov": 180,
  "label": "Sal\u00e3o",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 1.375796178343949,
   "yaw": -180
  },
  "id": "panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 1.5512877054295946,
        "hfov": 3.1080986753045847,
        "pitch": -29.106025591410212,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.1080986753045847,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 1.5512877054295946,
        "pitch": -29.106025591410212
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 93.35760349490326,
        "hfov": 3.496404607212333,
        "pitch": -10.617790602645002,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.496404607212333,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 93.35760349490326,
        "pitch": -10.617790602645002
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 18)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 159.79970875806117,
        "hfov": 3.460496666548644,
        "pitch": -13.397976315241275,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.460496666548644,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 159.79970875806117,
        "pitch": -13.397976315241275
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 16)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 76.5,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0",
  "vfov": 180,
  "label": "Sal\u00e3o",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -0.9050607734814091,
   "yaw": 180
  },
  "id": "panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -77.61305164939985,
        "hfov": 3.308334144446537,
        "pitch": -21.380632561126482,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.308334144446537,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -77.61305164939985,
        "pitch": -21.380632561126482
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 5)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 77.69221150849489,
        "hfov": 3.259663579257682,
        "pitch": -23.439579929547545,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.259663579257682,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 77.69221150849489,
        "pitch": -23.439579929547545
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 17)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 176.9764220348107,
        "hfov": 3.385992632217214,
        "pitch": -17.62905361375807,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.385992632217214,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 176.9764220348107,
        "pitch": -17.62905361375807
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 2)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42397325_478F_BF89_41D1_B97165B1F30C_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 80.1,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42397325_478F_BF89_41D1_B97165B1F30C_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42397325_478F_BF89_41D1_B97165B1F30C",
  "vfov": 180,
  "label": "Sala de Jantar",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -1.375796178343949,
   "yaw": -180
  },
  "id": "panorama_42397325_478F_BF89_41D1_B97165B1F30C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -147.95197676190173,
        "hfov": 3.3563670171557662,
        "pitch": -18.90541102624168,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.3563670171557662,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -147.95197676190173,
        "pitch": -18.90541102624168
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 22)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -24.060572306222348,
        "hfov": 3.428278320549785,
        "pitch": -14.91153152006602,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.428278320549785,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -24.060572306222348,
        "pitch": -14.91153152006602
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 23)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 88.81385527237656,
        "hfov": 3.455306218264035,
        "pitch": -13.108425648203418,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.455306218264035,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 88.81385527237656,
        "pitch": -13.108425648203418
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 20)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 67.5,
      "rotate": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 40
          }
         ]
        },
        "yaw": -105.90411260537667,
        "hfov": 4.836899022098027,
        "pitch": 1.1316867468561456,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 4.836899022098027,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 80
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -105.90411260537667,
        "pitch": 1.1316867468561456
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_57B0784B_4783_E999_41CB_702D3EDB9202, this.playList_5735A507_478C_FB89_41A0_E697249E4373, {'iconColor':'#000000','paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'borderSize':0,'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverIconHeight':20,'pressedIconLineWidth':5,'rollOverIconLineWidth':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingBottom':5,'iconWidth':20,'rollOverIconWidth':20,'iconHeight':20,'rollOverBorderSize':0,'paddingTop':5,'rollOverBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundOpacity':0.3}, this.ImageResource_5725A545_478C_FB89_416C_B594D86191D8, null, null, null, null, false)"
       }
      ]
     },
     {
      "hfov": 4.836899022098027,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_57B0784B_4783_E999_41CB_702D3EDB9202_0_4.jpg",
         "class": "ImageResourceLevel",
         "height": 341,
         "width": 512
        },
        {
         "url": "media/popup_57B0784B_4783_E999_41CB_702D3EDB9202_0_3.jpg",
         "class": "ImageResourceLevel",
         "height": 682,
         "width": 1024
        }
       ]
      },
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "showDuration": 500,
      "showEasing": "cubic_in",
      "rotationY": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "id": "popup_57B0784B_4783_E999_41CB_702D3EDB9202",
      "hideEasing": "cubic_out",
      "yaw": -105.90411260537667,
      "hideDuration": 500,
      "pitch": 1.1316867468561456,
      "popupMaxHeight": "95%"
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29",
  "vfov": 180,
  "label": "Cave Jardim",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -8.254777070063694,
   "yaw": -129.78343949044586
  },
  "id": "panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 27
          }
         ]
        },
        "yaw": -101.00501261653038,
        "hfov": 3.055260142181818,
        "pitch": -21.37151228934248,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.055260142181818,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 54
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -101.00501261653038,
        "pitch": -21.37151228934248
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 27
          }
         ]
        },
        "yaw": 0.7550080112796633,
        "hfov": 2.8121811925110336,
        "pitch": -31.002242017533202,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.8121811925110336,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 54
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 0.7550080112796633,
        "pitch": -31.002242017533202
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 22)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 27
          }
         ]
        },
        "yaw": 20.519375149603995,
        "hfov": 3.212014312074691,
        "pitch": -11.758437427747875,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.212014312074691,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 54
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 20.519375149603995,
        "pitch": -11.758437427747875
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 24)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 27
          }
         ]
        },
        "yaw": 62.34218775480816,
        "hfov": 3.1305935601968633,
        "pitch": -17.407994738510542,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.1305935601968633,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 54
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 62.34218775480816,
        "pitch": -17.407994738510542
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 19)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 27
          }
         ]
        },
        "yaw": 170.51680432438687,
        "hfov": 3.0921679397383377,
        "pitch": -19.526578730046538,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.0921679397383377,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 54
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 170.51680432438687,
        "pitch": -19.526578730046538
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 23)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 74.7,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1",
  "vfov": 180,
  "label": "Cave",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -6.869596810953075,
   "yaw": 80.71337579617834
  },
  "id": "panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2008,
       "width": 2008
      },
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2008,
       "width": 2008
      },
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2008,
       "width": 2008
      },
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2008,
       "width": 2008
      },
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 32,
           "width": 32
          }
         ]
        },
        "yaw": 18.165527104843864,
        "hfov": 3.709671852512503,
        "pitch": -6.067451861174444,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.709671852512503,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 65
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 18.165527104843864,
        "pitch": -6.067451861174444
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 32,
           "width": 32
          }
         ]
        },
        "yaw": 146.6497886060545,
        "hfov": 3.62580176972484,
        "pitch": -13.610885787981859,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.62580176972484,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 65
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 146.6497886060545,
        "pitch": -13.610885787981859
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 2)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42363454_4785_B98F_41CB_70B6AE9B5185_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 81.9,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2008,
       "width": 2008
      },
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2008,
       "width": 2008
      },
      {
       "url": "media/panorama_42363454_4785_B98F_41CB_70B6AE9B5185_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": -4.565708902496468,
  "class": "Panorama",
  "id": "panorama_42363454_4785_B98F_41CB_70B6AE9B5185",
  "vfov": 170.86858219500706,
  "label": "Gym",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -1.8320161145995193,
   "yaw": -157.29936305732485
  },
  "id": "panorama_42363454_4785_B98F_41CB_70B6AE9B5185_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 31,
           "width": 31
          }
         ]
        },
        "yaw": -3.889137889597103,
        "hfov": 3.587508749136703,
        "pitch": -15.593782550838377,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.587508749136703,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 62,
           "width": 62
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -3.889137889597103,
        "pitch": -15.593782550838377
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 19)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 31,
           "width": 31
          }
         ]
        },
        "yaw": -79.18496287813991,
        "hfov": 3.174705870656793,
        "pitch": -31.53066211046238,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.174705870656793,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 62,
           "width": 62
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -79.18496287813991,
        "pitch": -31.53066211046238
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 21)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 31,
           "width": 31
          }
         ]
        },
        "yaw": -161.69884912285323,
        "hfov": 2.856412785561715,
        "pitch": -39.92336083806122,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 2.856412785561715,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 62,
           "width": 62
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -161.69884912285323,
        "pitch": -39.92336083806122
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 24)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 31,
           "width": 31
          }
         ]
        },
        "yaw": 167.99138811390938,
        "hfov": 3.5344572890408372,
        "pitch": -18.38688665370959,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.5344572890408372,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 62,
           "width": 62
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 167.99138811390938,
        "pitch": -18.38688665370959
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 20)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4234730E_4785_BF9B_41A3_443711C84A53_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 68.4,
      "rotate": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 42,
           "width": 42
          }
         ]
        },
        "yaw": -6.572544618338445,
        "hfov": 5.01963728456752,
        "pitch": 8.769076111437336,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 5.01963728456752,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_0_HS_4_0.png",
           "class": "ImageResourceLevel",
           "height": 84,
           "width": 84
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -6.572544618338445,
        "pitch": 8.769076111437336
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_577D4B26_4784_AF8B_41BD_07F8D198CC81, this.playList_5735A507_478C_FB89_41A0_E697249E4373, {'iconColor':'#000000','paddingRight':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'borderSize':0,'pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverIconHeight':20,'pressedIconLineWidth':5,'rollOverIconLineWidth':5,'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingBottom':5,'iconWidth':20,'rollOverIconWidth':20,'iconHeight':20,'rollOverBorderSize':0,'paddingTop':5,'rollOverBackgroundColorDirection':'vertical','paddingLeft':5,'rollOverBackgroundOpacity':0.3}, this.ImageResource_56DA554B_478C_FB99_41C7_FB1E7B184501, null, null, null, null, false)"
       }
      ]
     },
     {
      "hfov": 5.01963728456752,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_577D4B26_4784_AF8B_41BD_07F8D198CC81_0_4.jpg",
         "class": "ImageResourceLevel",
         "height": 340,
         "width": 512
        },
        {
         "url": "media/popup_577D4B26_4784_AF8B_41BD_07F8D198CC81_0_3.jpg",
         "class": "ImageResourceLevel",
         "height": 681,
         "width": 1024
        }
       ]
      },
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "showDuration": 500,
      "showEasing": "cubic_in",
      "rotationY": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "id": "popup_577D4B26_4784_AF8B_41BD_07F8D198CC81",
      "hideEasing": "cubic_out",
      "yaw": -6.572544618338445,
      "hideDuration": 500,
      "pitch": 8.769076111437336,
      "popupMaxHeight": "95%"
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4234730E_4785_BF9B_41A3_443711C84A53_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4234730E_4785_BF9B_41A3_443711C84A53",
  "vfov": 180,
  "label": "Cave corredor",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.034245997032197,
   "yaw": 163.71974522292993
  },
  "id": "panorama_4234730E_4785_BF9B_41A3_443711C84A53_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -25.06931993806709,
        "hfov": 3.387666436218703,
        "pitch": -16.223123455393228,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.387666436218703,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -25.06931993806709,
        "pitch": -16.223123455393228
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 20)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 56.2054985844918,
        "hfov": 3.4153328488705514,
        "pitch": -14.528580680970004,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.4153328488705514,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 56.2054985844918,
        "pitch": -14.528580680970004
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 19)"
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": -123.03106227681349,
        "hfov": 3.17095285919616,
        "pitch": -26.00484920616428,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.17095285919616,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 58
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -123.03106227681349,
        "pitch": -26.00484920616428
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 0)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_42362C35_4784_A989_41B7_F49E62C27C56_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 72,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_42362C35_4784_A989_41B7_F49E62C27C56_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_42362C35_4784_A989_41B7_F49E62C27C56",
  "vfov": 180,
  "label": "Garagem",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -2.281473389384407,
   "yaw": -24.764331210191084
  },
  "id": "panorama_42362C35_4784_A989_41B7_F49E62C27C56_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_t.jpg",
  "frames": [
   {
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "thumbnailUrl": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_t.jpg",
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 29
          }
         ]
        },
        "yaw": 148.13174767538908,
        "hfov": 3.390533348213779,
        "pitch": -19.168916610452502,
        "roll": 0
       }
      ],
      "useHandCursor": true,
      "items": [
       {
        "hfov": 3.390533348213779,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 59
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 148.13174767538908,
        "pitch": -19.168916610452502
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 22)"
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4235C22F_4784_5999_41D1_769E6507F7F0_cap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_cap0.png",
         "class": "ImageResourceLevel",
         "height": 288,
         "width": 288
        }
       ]
      },
      "angle": 0,
      "inertia": false,
      "hfov": 65.7,
      "rotate": false
     }
    ],
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    },
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 1904,
       "width": 1904
      },
      {
       "url": "media/panorama_4235C22F_4784_5999_41D1_769E6507F7F0_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 800,
       "width": 800
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "id": "panorama_4235C22F_4784_5999_41D1_769E6507F7F0",
  "vfov": 180,
  "label": "Cinema",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -5.951885015627768,
   "yaw": -3.210191082802548
  },
  "id": "panorama_4235C22F_4784_5999_41D1_769E6507F7F0_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 8.95,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_4236C555_4784_DB89_41C0_4B8B63A2D324_camera",
    "class": "PanoramaPlayListItem",
    "player": {
     "class": "PanoramaPlayer",
     "mouseControlMode": "drag_acceleration",
     "touchControlMode": "drag_rotation",
     "id": "MainViewerPanoramaPlayer",
     "viewerArea": "this.MainViewer"
    },
    "media": "this.panorama_4236C555_4784_DB89_41C0_4B8B63A2D324",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 0, 1)"
   },
   {
    "camera": "this.panorama_42372A98_4784_EE87_41D1_7A0216184E69_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42372A98_4784_EE87_41D1_7A0216184E69",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 1, 2)"
   },
   {
    "camera": "this.panorama_42378374_4784_7F8F_41C0_4378A6B274C4_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42378374_4784_7F8F_41C0_4378A6B274C4",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 2, 3)"
   },
   {
    "camera": "this.panorama_42369387_4785_DE89_41C6_0F20C46A6115_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42369387_4785_DE89_41C6_0F20C46A6115",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 3, 4)"
   },
   {
    "camera": "this.panorama_41C01665_4784_B989_419D_F36CC1B5C355_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_41C01665_4784_B989_419D_F36CC1B5C355",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 4, 5)"
   },
   {
    "camera": "this.panorama_42355A09_4787_E999_41A3_4FA77691824B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42355A09_4787_E999_41A3_4FA77691824B",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 5, 6)"
   },
   {
    "camera": "this.panorama_42366D7B_4784_6A79_41C0_A223A151D697_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42366D7B_4784_6A79_41C0_A223A151D697",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 6, 7)"
   },
   {
    "camera": "this.panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4E265D13_47BC_AB89_41B8_AB8C49CF89FF",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 7, 8)"
   },
   {
    "camera": "this.panorama_4237FF85_4784_A689_41D0_068D83FFB0BD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4237FF85_4784_A689_41D0_068D83FFB0BD",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 8, 9)"
   },
   {
    "camera": "this.panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4237D3BA_4783_BEFB_41C9_D55088D60A88",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 9, 10)"
   },
   {
    "camera": "this.panorama_423DD9E9_4785_AA99_419F_C404E3EB5270_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_423DD9E9_4785_AA99_419F_C404E3EB5270",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 10, 11)"
   },
   {
    "camera": "this.panorama_4238A245_478C_5989_41B0_AA3F71503CAE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4238A245_478C_5989_41B0_AA3F71503CAE",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 11, 12)"
   },
   {
    "camera": "this.panorama_423746A2_4783_A68B_41C1_1310A9494AAC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_423746A2_4783_A68B_41C1_1310A9494AAC",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 12, 13)"
   },
   {
    "camera": "this.panorama_4238FC47_478C_E989_41CB_7FA768BBF334_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4238FC47_478C_E989_41CB_7FA768BBF334",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 13, 14)"
   },
   {
    "camera": "this.panorama_42381904_478C_6B8F_41C6_16336FF98183_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42381904_478C_6B8F_41C6_16336FF98183",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 14, 15)"
   },
   {
    "camera": "this.panorama_4239E6CA_478C_E69B_41BF_95A54096F235_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4239E6CA_478C_E69B_41BF_95A54096F235",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 15, 16)"
   },
   {
    "camera": "this.panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_423A3F86_478C_668B_41BA_CF1728B8FDF2",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 16, 17)"
   },
   {
    "camera": "this.panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_423BBBE6_478C_AE8B_41AC_A668F778C2C0",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 17, 18)"
   },
   {
    "camera": "this.panorama_42397325_478F_BF89_41D1_B97165B1F30C_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42397325_478F_BF89_41D1_B97165B1F30C",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 18, 19)"
   },
   {
    "camera": "this.panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_423547BD_4784_A6F9_41C7_82B1F9E30A29",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 19, 20)"
   },
   {
    "camera": "this.panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4235CD5E_4784_EBBB_41AB_E5C211D0FBB1",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 20, 21)"
   },
   {
    "camera": "this.panorama_42363454_4785_B98F_41CB_70B6AE9B5185_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42363454_4785_B98F_41CB_70B6AE9B5185",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 21, 22)"
   },
   {
    "camera": "this.panorama_4234730E_4785_BF9B_41A3_443711C84A53_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4234730E_4785_BF9B_41A3_443711C84A53",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 22, 23)"
   },
   {
    "camera": "this.panorama_42362C35_4784_A989_41B7_F49E62C27C56_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_42362C35_4784_A989_41B7_F49E62C27C56",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 23, 24)"
   },
   {
    "camera": "this.panorama_4235C22F_4784_5999_41D1_769E6507F7F0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4235C22F_4784_5999_41D1_769E6507F7F0",
    "begin": "this.setEndToItemIndex(this.playList_5735A507_478C_FB89_41A0_E697249E4373, 24, 0)"
   }
  ],
  "id": "playList_5735A507_478C_FB89_41A0_E697249E4373"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5744B3C9_479C_DE99_41CF_B5AA77424262_0_0.jpg",
    "class": "ImageResourceLevel",
    "height": 2829,
    "width": 4250
   },
   {
    "url": "media/popup_5744B3C9_479C_DE99_41CF_B5AA77424262_0_1.jpg",
    "class": "ImageResourceLevel",
    "height": 2726,
    "width": 4096
   },
   {
    "url": "media/popup_5744B3C9_479C_DE99_41CF_B5AA77424262_0_2.jpg",
    "class": "ImageResourceLevel",
    "height": 1363,
    "width": 2048
   },
   {
    "url": "media/popup_5744B3C9_479C_DE99_41CF_B5AA77424262_0_3.jpg",
    "class": "ImageResourceLevel",
    "height": 681,
    "width": 1024
   },
   {
    "url": "media/popup_5744B3C9_479C_DE99_41CF_B5AA77424262_0_4.jpg",
    "class": "ImageResourceLevel",
    "height": 340,
    "width": 512
   }
  ],
  "id": "ImageResource_57212530_478C_FB87_41C4_5733BEAF4409"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23_0_0.jpg",
    "class": "ImageResourceLevel",
    "height": 2823,
    "width": 4251
   },
   {
    "url": "media/popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23_0_1.jpg",
    "class": "ImageResourceLevel",
    "height": 2720,
    "width": 4096
   },
   {
    "url": "media/popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23_0_2.jpg",
    "class": "ImageResourceLevel",
    "height": 1360,
    "width": 2048
   },
   {
    "url": "media/popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23_0_3.jpg",
    "class": "ImageResourceLevel",
    "height": 680,
    "width": 1024
   },
   {
    "url": "media/popup_57474AF4_479F_EE8F_41B4_26BFB91A9F23_0_4.jpg",
    "class": "ImageResourceLevel",
    "height": 340,
    "width": 512
   }
  ],
  "id": "ImageResource_5725853A_478C_FBFB_41C0_6B3FAA5CFAAB"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57B0784B_4783_E999_41CB_702D3EDB9202_0_0.jpg",
    "class": "ImageResourceLevel",
    "height": 2830,
    "width": 4244
   },
   {
    "url": "media/popup_57B0784B_4783_E999_41CB_702D3EDB9202_0_1.jpg",
    "class": "ImageResourceLevel",
    "height": 2731,
    "width": 4096
   },
   {
    "url": "media/popup_57B0784B_4783_E999_41CB_702D3EDB9202_0_2.jpg",
    "class": "ImageResourceLevel",
    "height": 1365,
    "width": 2048
   },
   {
    "url": "media/popup_57B0784B_4783_E999_41CB_702D3EDB9202_0_3.jpg",
    "class": "ImageResourceLevel",
    "height": 682,
    "width": 1024
   },
   {
    "url": "media/popup_57B0784B_4783_E999_41CB_702D3EDB9202_0_4.jpg",
    "class": "ImageResourceLevel",
    "height": 341,
    "width": 512
   }
  ],
  "id": "ImageResource_5725A545_478C_FB89_416C_B594D86191D8"
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_577D4B26_4784_AF8B_41BD_07F8D198CC81_0_0.jpg",
    "class": "ImageResourceLevel",
    "height": 2829,
    "width": 4252
   },
   {
    "url": "media/popup_577D4B26_4784_AF8B_41BD_07F8D198CC81_0_1.jpg",
    "class": "ImageResourceLevel",
    "height": 2725,
    "width": 4096
   },
   {
    "url": "media/popup_577D4B26_4784_AF8B_41BD_07F8D198CC81_0_2.jpg",
    "class": "ImageResourceLevel",
    "height": 1362,
    "width": 2048
   },
   {
    "url": "media/popup_577D4B26_4784_AF8B_41BD_07F8D198CC81_0_3.jpg",
    "class": "ImageResourceLevel",
    "height": 681,
    "width": 1024
   },
   {
    "url": "media/popup_577D4B26_4784_AF8B_41BD_07F8D198CC81_0_4.jpg",
    "class": "ImageResourceLevel",
    "height": 340,
    "width": 512
   }
  ],
  "id": "ImageResource_56DA554B_478C_FB99_41C7_FB1E7B184501"
 }
], "children": [
 {
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "shadow": false,
  "paddingBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingTop": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarOpacity": 1,
  "progressBorderColor": "#000000",
  "progressBorderRadius": 0,
  "id": "MainViewer",
  "width": "100%",
  "progressHeight": 10,
  "height": "100%",
  "progressBorderSize": 0,
  "progressLeft": 0,
  "transitionMode": "blending",
  "progressBottom": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderRadius": 0,
  "paddingLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeight": 10,
  "toolTipFontStyle": "normal",
  "playbackBarBottom": 5,
  "paddingRight": 0,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipOpacity": 1,
  "borderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadHeight": 15,
  "toolTipBorderRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderSize": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadow": true,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowOpacity": 0.7,
  "minWidth": 100,
  "minHeight": 50,
  "class": "ViewerArea",
  "toolTipFontColor": "#606060",
  "toolTipFontSize": 12,
  "toolTipShadowColor": "#333333",
  "toolTipPaddingLeft": 6
 },
 {
  "scrollBarWidth": 10,
  "paddingRight": 0,
  "borderSize": 0,
  "left": 0,
  "right": 0,
  "scrollBarMargin": 2,
  "bottom": 0,
  "borderRadius": 0,
  "shadow": false,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "children": [
   {
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowOpacity": 0.8,
    "scrollBarWidth": 10,
    "itemBorderRadius": 0,
    "paddingRight": 20,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontSize": 14,
    "borderSize": 0,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailHeight": 75,
    "scrollBarMargin": 2,
    "itemOpacity": 1,
    "itemLabelFontFamily": "Arial",
    "paddingLeft": 20,
    "borderRadius": 5,
    "itemThumbnailWidth": 100,
    "itemPaddingLeft": 3,
    "itemThumbnailBorderRadius": 5,
    "shadow": false,
    "itemPaddingBottom": 3,
    "paddingBottom": 10,
    "itemVerticalAlign": "middle",
    "itemLabelPosition": "bottom",
    "itemPaddingTop": 3,
    "paddingTop": 10,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowVerticalLength": 3,
    "playList": "this.playList_5735A507_478C_FB89_41A0_E697249E4373",
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "itemHorizontalAlign": "center",
    "itemThumbnailOpacity": 1,
    "backgroundColor": [
     "#000000"
    ],
    "itemThumbnailShadow": true,
    "scrollBarColor": "#FFFFFF",
    "minWidth": 0,
    "itemThumbnailShadowBlurRadius": 4,
    "minHeight": 0,
    "scrollBarOpacity": 0.5,
    "itemLabelTextDecoration": "none",
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailShadowColor": "#000000",
    "maxWidth": 800,
    "itemLabelGap": 5,
    "class": "ThumbnailList",
    "maxHeight": 600,
    "horizontalAlign": "left",
    "backgroundColorDirection": "vertical",
    "itemThumbnailShadowSpread": 1,
    "gap": 10,
    "itemPaddingRight": 3,
    "backgroundOpacity": 0.2,
    "verticalAlign": "top",
    "itemBackgroundColorDirection": "vertical",
    "itemBackgroundColorRatios": [],
    "layout": "horizontal",
    "itemMode": "normal",
    "itemBackgroundColor": [],
    "itemBackgroundOpacity": 0
   }
  ],
  "overflow": "visible",
  "minWidth": 20,
  "minHeight": 20,
  "height": 200,
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "class": "Container",
  "gap": 10,
  "verticalAlign": "bottom",
  "horizontalAlign": "center",
  "contentOpaque": false,
  "backgroundOpacity": 0,
  "layout": "horizontal"
 },
 {
  "paddingRight": 0,
  "borderSize": 0,
  "left": 0,
  "paddingLeft": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "shadow": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "minHeight": 0,
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "visible": false,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.55
 },
 {
  "paddingRight": 0,
  "borderSize": 0,
  "left": 0,
  "paddingLeft": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "scaleMode": "custom",
  "shadow": false,
  "paddingBottom": 0,
  "paddingTop": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "minHeight": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColorRatios": [],
  "visible": false,
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 1
 },
 {
  "fontSize": 12,
  "iconColor": "#000000",
  "paddingRight": 5,
  "textDecoration": "none",
  "fontStyle": "normal",
  "fontFamily": "Arial",
  "borderSize": 0,
  "mode": "push",
  "paddingLeft": 5,
  "borderColor": "#000000",
  "right": 10,
  "top": 10,
  "borderRadius": 0,
  "label": "",
  "shadow": false,
  "paddingBottom": 5,
  "shadowBlurRadius": 6,
  "paddingTop": 5,
  "iconHeight": 20,
  "fontColor": "#FFFFFF",
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minWidth": 0,
  "minHeight": 0,
  "horizontalAlign": "center",
  "id": "closeButtonPopupPanorama",
  "fontWeight": "normal",
  "backgroundColorRatios": [
   0,
   0.09803921568627451,
   1
  ],
  "visible": false,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "iconWidth": 20,
  "class": "CloseButton",
  "backgroundColorDirection": "vertical",
  "iconLineWidth": 5,
  "iconBeforeLabel": true,
  "rollOverIconColor": "#666666",
  "cursor": "hand",
  "verticalAlign": "middle",
  "gap": 5,
  "pressedIconColor": "#888888",
  "backgroundOpacity": 0.3,
  "layout": "horizontal"
 }
], 
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "width": "100%",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "start": "this.playList_5735A507_478C_FB89_41A0_E697249E4373.set('selectedIndex', 0)",
 "height": "100%",
 "class": "Player",
 "horizontalAlign": "left",
 "scripts": {
  "resumePlayList": function(playList, containsAudio){    if(playList){       var player = playList.get('items')[playList.get('selectedIndex')].get('player');       if(player){           if(!containsAudio && typeof player.resumeCamera !== 'undefined'){               player.resumeCamera();           }           else{               player.play();           }       }   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "updatePlayListsUI": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "resumeGlobalAudios": function(){    var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, playListDispatcher, indexDispatcher){    var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       playList.set('selectedIndex', -1);       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player)           player.unbind('stateChange', stateChangeFunction, this);       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, this);       }       else{           viewerArea.set('visible', false);       }   };   if(indexDispatcher == undefined || indexDispatcher == -1){       indexDispatcher = playListDispatcher.get('selectedIndex');   }   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   playList.set('selectedIndex', index);   if(item.get('player') != itemDispatcher.get('player')){       var player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');                          };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, playListToPause, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       if(playListToPause){           self.resumePlayList(playListToPause, audio != null && stopBackgroundAudio);       }       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   if(playListToPause){       this.pausePlayList(playListToPause, audio != null && stopBackgroundAudio);   }   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);   zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "pausePlayList": function(playList, containsAudio){    if(playList){       var player = playList.get('items')[playList.get('selectedIndex')].get('player');       if(player){           if(!containsAudio && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }   } },
  "startPanoramaWithCamera": function(playList, index, camera){    var playListItem = playList.get('items')[index];   var previousCamera = playListItem.get('camera');   playListItem.set('camera', camera);   var restoreCameraOnStop = function(){       playListItem.set('camera', previousCamera);       playListItem.unbind('stop', restoreCameraOnStop, this);   };   playListItem.bind('stop', restoreCameraOnStop, this);   playList.set('selectedIndex', index); },
  "pauseGlobalAudios": function(){    var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction();   };   this.pauseGlobalAudios();   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showWindow": function(w, autoCloseMilliSeconds, currentPlayListToPause, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayList(currentPlayListToPause, containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   this.pausePlayList(currentPlayListToPause, containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, this);           playList.unbind('change', changePlayListFunction, this);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var camera = playListItem.get('camera');       if(camera){           var endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   console.log('state' + state);   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       console.log('playing');       button.set('pressed', true);   } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, playListToPause, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   var showEndFunction = function() {       var loadedFunction = function(){           popupPanoramaOverlay.set('visible', false);       };       popupPanoramaOverlay.unbind('showEnd', showEndFunction, this);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', 1);       this.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, undefined, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);   };   var hideFunction = function() {       var restoreShowDurationFunction = function(){           popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, this);           popupPanoramaOverlay.set('visible', false);           popupPanoramaOverlay.set('showDuration', showDuration);           popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);           popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);       };       if(playListToPause){           self.resumePlayList(playListToPause, audio != null && stopBackgroundAudio);       }       var currentWidth = zoomImage.get('imageWidth');       var currentHeight = zoomImage.get('imageHeight');       popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, this, true);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', hideDuration);       popupPanoramaOverlay.set('popupMaxWidth', currentWidth);       popupPanoramaOverlay.set('popupMaxHeight', currentHeight);       popupPanoramaOverlay.set('visible', true);   };   if(!imageHD){       imageHD = popupPanoramaOverlay.get('image');   }   if(!toggleImageHD && toggleImage){       toggleImageHD = toggleImage;   }   var zoomImage = this.zoomImagePopupPanorama;   var showDuration = popupPanoramaOverlay.get('showDuration');   var hideDuration = popupPanoramaOverlay.get('hideDuration');   if(playListToPause){       this.pausePlayList(playListToPause, audio != null && stopBackgroundAudio);   }   var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');   var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var rollOutFunction = function(){       var rollOverFunction = function(){           clearTimeout(timeoutID);           dispose();       };       var timeoutFunction = function(){           setVisibility(false);           dispose();       };       var dispose = function(){           parentComponent.unbind('rollOver', rollOverFunction, this);       };       parentComponent.unbind('rollOut', rollOutFunction, this);       parentComponent.bind('rollOver', rollOverFunction, this);       var timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);   };   var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   parentComponent.bind('rollOut', rollOutFunction, this);   setVisibility(true); }
 },
 "gap": 10,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "layout": "absolute"
})