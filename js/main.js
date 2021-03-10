// var geojsonFeature = {
//     type: "FeatureCollection",
//     features: [
//       {
//         id: "60d23ee7-58d9-4819-abc9-142baedd02f7",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-130.20099484, -24.4435027] },
//       },
//       {
//         id: "6f956258-2644-4b3a-ba32-78f567f297e1",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-124.37902833, -25.63339158] },
//       },
//       {
//         id: "63fecef0-52fb-44f6-8566-f7f0b33036b9",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-128.40118516, -26.96338812] },
//       },
//       {
//         id: "6fef1c6e-c2c1-4965-9add-4e6993a86cc7",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-139.48250727, -12.1527842] },
//       },
//       {
//         id: "e8777807-2d2d-496c-a9a9-20d58cff220a",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: {
//           type: "LineString",
//           coordinates: [
//             [-131.54901409, -13.68549214],
//             [-130.99060873, -21.53809735],
//             [-137.58748499, -20.53588363],
//             [-131.58004643, -13.626655],
//           ],
//         },
//       },
//       {
//         id: "e822031e-91c0-4bd9-ad5d-bff40eca5db3",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-126.7864378, -21.5831981] },
//       },
//       {
//         id: "c905bfa7-6dfd-4fcf-9481-7abf73c2d225",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-126.98570862, -24.01600717] },
//       },
//       {
//         id: "e6d03afb-4df6-489f-a0b8-559a30e9dc70",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-133.96544182, -24.57782843] },
//       },
//       {
//         id: "b82f8602-bcce-4b92-8604-7159cfbea506",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-128.45951598, -18.4512611] },
//       },
//       {
//         id: "04afd01c-0c92-4543-8b05-11417286d73a",
//         properties: { name: "no go zone " },
//         type: "Feature",
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [-137.88933948, -28.85134819],
//               [-140.56289054, -25.07646591],
//               [-134.41481929, -25.95615618],
//               [-134.87225678, -29.14857627],
//               [-136.44021193, -27.07761367],
//               [-137.88933948, -28.85134819],
//             ],
//           ],
//         },
//       },
//       {
//         id: "4d4aef55-f1f9-47df-bcd9-7eab52b7e50e",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-137.14092113, -15.81376754] },
//       },
//       {
//         id: "8413d12d-9158-4cdd-9ee7-9d73bb2c9c67",
//         properties: { name: "no go 2" },
//         type: "Feature",
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [-142.00029856, -18.25762987],
//               [-138.35828171, -14.89904451],
//               [-143.31137613, -13.8735761],
//               [-145.41460365, -19.0105652],
//               [-142.00029856, -18.25762987],
//             ],
//           ],
//         },
//       },
//       {
//         id: "2ed83037-117b-4a96-9d95-b33395325462",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-122.78540206, -25.07855939] },
//       },
//       {
//         id: "23715f85-7f87-4f51-9c43-c2df3ab2dd29",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-133.49447074, -12.43255324] },
//       },
//       {
//         id: "9d9b277c-415e-435a-94a7-a4f6a7009a45",
//         properties: { name: "" },
//         type: "Feature",
//         geometry: { type: "Point", coordinates: [-121.79150969, -29.09852502] },
//       },
//     ],
//   };
  var marsGeoJson = {
    "type": "FeatureCollection",
    "features": [
        {
            "id": "69e625a3-89e4-4672-b797-c8972c9fe5b4",
            "properties": {
                "name": "ZoneALines",
                "ZoneType": "false"
            },
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -127.73319122,
                    -5.87121848
                ]
            }
        },
        {
            "id": "5b1ef35c-c0a8-4bbf-bcce-2ecbb753c4f1",
            "properties": {
                "name": "Zone B",
                "ZoneType": "green"
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -122.98535011,
                            -8.58554639
                        ],
                        [
                            -122.11358933,
                            -7.00919461
                        ],
                        [
                            -119.15622588,
                            -6.18181803
                        ],
                        [
                            -116.69018917,
                            -7.72657488
                        ],
                        [
                            -116.39510121,
                            -8.7613659
                        ],
                        [
                            -116.54916203,
                            -9.36772376
                        ],
                        [
                            -116.90134664,
                            -10.20670883
                        ],
                        [
                            -120.02954161,
                            -12.21347527
                        ],
                        [
                            -122.22537319,
                            -11.73646911
                        ],
                        [
                            -122.94199861,
                            -11.02305498
                        ],
                        [
                            -123.22151509,
                            -9.83744347
                        ],
                        [
                            -122.98535011,
                            -8.58554639
                        ]
                    ]
                ]
            }
        },
        {
            "id": "8b2d2695-9b96-4283-9be8-297d3aa55db8",
            "properties": {
                "name": ""
            },
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -142.65499921,
                    -13.8046053
                ]
            }
        },
        {
            "id": "84a11782-8bd5-4b5b-93aa-cacc24e284bb",
            "properties": {
                "name": "Habitat To EV1 Location Line",
                "ZoneType": "true"
            },
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -132.95507397,
                    -7.25654003
                ]
            }
        },
        {
            "id": "f60d5796-e3d6-43d4-9f24-80c25e443022",
            "properties": {
                "name": ""
            },
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -130.56843041,
                    -6.96147303
                ]
            }
        },
        {
            "id": "d1fd3c4c-cf86-40da-8a6f-a22874e03c73",
            "properties": {
                "name": ""
            },
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -129.49996059,
                    -4.87246862
                ]
            }
        },
        {
            "id": "d804631f-b4d2-4c99-aca3-4b44d3e7048b",
            "properties": {
                "name": "Zone C",
                "ZoneType": "green"
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -141.81429005,
                            -18.72618522
                        ],
                        [
                            -139.66201534,
                            -18.09402447
                        ],
                        [
                            -137.77861085,
                            -19.70154812
                        ],
                        [
                            -138.05040761,
                            -21.32798364
                        ],
                        [
                            -139.96725814,
                            -22.33095817
                        ],
                        [
                            -142.15601177,
                            -21.52827807
                        ],
                        [
                            -142.2505115,
                            -20.02076337
                        ],
                        [
                            -141.81429005,
                            -18.72618522
                        ]
                    ]
                ]
            }
        },
        {
            "id": "f3241f99-e22e-44b4-8b3c-8e09eee3e1aa",
            "properties": {
                "name": "C to Habitat Line",
                "ZoneType": "true"
            },
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -141.81429005,
                        -18.72618522
                    ],
                    [
                        -142.65499921,
                        -13.8046053
                    ]
                ]
            }
        },
        {
            "id": "d707dd2a-c1f6-43e0-9dfa-7d3570ea5bed",
            "properties": {
                "name": "No Go 1",
                "ZoneType": "red"
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -134.99655018,
                            -10.87800605
                        ],
                        [
                            -134.8452639,
                            -10.23502817
                        ],
                        [
                            -134.16629485,
                            -9.76910816
                        ],
                        [
                            -132.87035492,
                            -9.75054659
                        ],
                        [
                            -132.38718561,
                            -10.0415984
                        ],
                        [
                            -131.92585768,
                            -11.4116733
                        ],
                        [
                            -132.53151791,
                            -12.35381216
                        ],
                        [
                            -134.47286495,
                            -12.54970314
                        ],
                        [
                            -135.44158324,
                            -12.21144206
                        ],
                        [
                            -135.58861079,
                            -11.13217031
                        ],
                        [
                            -134.99655018,
                            -10.87800605
                        ]
                    ]
                ]
            }
        },
        {
            "id": "f62c699c-7a9e-4450-921a-efc16f500e90",
            "properties": {
                "name": "No Go 3",
                "ZoneType": "red"
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -141.41314978,
                            -10.77333783
                        ],
                        [
                            -140.26229645,
                            -10.34870608
                        ],
                        [
                            -139.94993533,
                            -9.5786933
                        ],
                        [
                            -140.63292213,
                            -8.49310118
                        ],
                        [
                            -143.46205716,
                            -8.06797476
                        ],
                        [
                            -144.2359941,
                            -9.0527761
                        ],
                        [
                            -143.92314342,
                            -10.42010106
                        ],
                        [
                            -143.37536203,
                            -10.71175564
                        ],
                        [
                            -141.41314978,
                            -10.77333783
                        ]
                    ]
                ]
            }
        },
        {
            "id": "b93da9ca-76d5-452b-89b1-ef562e9c4f40",
            "properties": {
                "name": "No Go 4",
                "ZoneType": "red"
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -122.13030961,
                            -3.97522653
                        ],
                        [
                            -123.2536625,
                            -2.03506149
                        ],
                        [
                            -123.69023457,
                            1.27513862
                        ],
                        [
                            -116.83260499,
                            1.76584014
                        ],
                        [
                            -114.93190056,
                            -0.1271424
                        ],
                        [
                            -114.85652218,
                            -2.22872409
                        ],
                        [
                            -115.98480319,
                            -3.82242191
                        ],
                        [
                            -118.44586228,
                            -4.71910403
                        ],
                        [
                            -122.13030961,
                            -3.97522653
                        ]
                    ]
                ]
            }
        },
        {
            "id": "fbda3df2-b409-44b6-8be0-cfe7ae5f1971",
            "properties": {
                "name": "No Go 5",
                "ZoneType": "red"
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -104.82065575,
                            -13.03019968
                        ],
                        [
                            -108.98950414,
                            -13.80998088
                        ],
                        [
                            -111.82342044,
                            -16.62536375
                        ],
                        [
                            -111.14702688,
                            -18.83169405
                        ],
                        [
                            -109.2424818,
                            -20.73004842
                        ],
                        [
                            -103.81569431,
                            -21.00595591
                        ],
                        [
                            -102.48512056,
                            -18.13201009
                        ],
                        [
                            -104.82065575,
                            -13.03019968
                        ]
                    ]
                ]
            }
        },
        {
            "id": "044c343c-d867-4836-b955-1500f3c5b282",
            "properties": {
                "name": ""
            },
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -142.65499921,
                        -13.8046053
                    ],
                    [
                        -132.95507397,
                        -7.25654003
                    ]
                ]
            }
        },
        {
            "id": "0e661295-7927-4c11-b274-f3a11efc7d0d",
            "properties": {
                "name": ""
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -132.95507397,
                            -7.25654003
                        ],
                        [
                            -132.09925443,
                            -4.78246444
                        ],
                        [
                            -130.36784053,
                            -3.40696963
                        ],
                        [
                            -127.05194852,
                            -4.05631518
                        ],
                        [
                            -126.05833308,
                            -5.63348319
                        ],
                        [
                            -125.93754508,
                            -6.8181932
                        ],
                        [
                            -126.43588359,
                            -7.77966075
                        ],
                        [
                            -127.81166816,
                            -8.62872261
                        ],
                        [
                            -129.33468527,
                            -9.26460197
                        ],
                        [
                            -130.87087082,
                            -9.10208043
                        ],
                        [
                            -131.50204771,
                            -8.83744006
                        ],
                        [
                            -132.27086378,
                            -8.23829565
                        ],
                        [
                            -132.95507397,
                            -7.25654003
                        ]
                    ]
                ]
            }
        },
        {
            "id": "05b319e6-0ec3-4e21-b94d-259b772703c1",
            "properties": {
                "name": "B to C Line",
                "ZoneType": "true"
            },
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -122.22537319,
                        -11.73646911
                    ],
                    [
                        -130.18825933,
                        -19.93446956
                    ],
                    [
                        -138.05040761,
                        -21.32798364
                    ]
                ]
            }
        },
        {
            "id": "b38c3d29-4eb1-49a6-b017-b06d8b0e3700",
            "properties": {
                "name": "Zone A",
                "ZoneType": "green"
            },
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -132.95507397,
                        -7.25654003
                    ],
                    [
                        -130.56843041,
                        -6.96147303
                    ],
                    [
                        -129.49996059,
                        -4.87246862
                    ],
                    [
                        -127.73319122,
                        -5.87121848
                    ]
                ]
            }
        },
        {
            "id": "8defb133-734d-4352-9b83-3e9577acb02d",
            "properties": {
                "name": "No Go 2",
                "ZoneType": "red"
            },
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -134.09223876,
                            -18.52847191
                        ],
                        [
                            -133.83457869,
                            -18.11676035
                        ],
                        [
                            -132.91758178,
                            -17.53734524
                        ],
                        [
                            -131.69944155,
                            -17.68914227
                        ],
                        [
                            -131.41232954,
                            -18.35371291
                        ],
                        [
                            -131.81630617,
                            -18.78536009
                        ],
                        [
                            -133.40560473,
                            -19.37580533
                        ],
                        [
                            -134.10810196,
                            -19.83057848
                        ],
                        [
                            -135.94082252,
                            -19.57572499
                        ],
                        [
                            -135.81329295,
                            -18.84617914
                        ],
                        [
                            -135.19375378,
                            -18.39956762
                        ],
                        [
                            -134.09223876,
                            -18.52847191
                        ]
                    ]
                ]
            }
        },
        {
            "id": "1d275fbe-e2cb-408e-94b4-5b61a7296343",
            "properties": {
                "name": "A to B Line",
                "ZoneType": "true"
            },
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -125.93754508,
                        -6.8181932
                    ],
                    [
                        -122.73072493,
                        -8.12574564
                    ]
                ]
            }
        }
    ]
};

var evLocation = [-12.802112, -141.679669];
var zone2Location = [34.247104, -116.608887];

var mymap = L.map("mapid").setView(evLocation, 5);

var myLines = [
  {
    type: "LineString",
    coordinates: [evLocation, zone2Location],
  },
  {
    type: "LineString",
    coordinates: [evLocation, zone2Location, [-115, 55]],
  },
];

var myStyle = {
  color: "#ff7800",
  weight: 5,
  opacity: 0.65,
};

L.geoJSON(marsGeoJson, {
  style: myStyle,
}).addTo(mymap);
// var marker = L.marker([37.756279, -120.552151]).addTo(mymap);

var circle = L.circle([37.756279, -120.552151], {
  radius: 100000,
  color: "red",
  fillColor: "red",
  fillOpacity: 0.2,
}).addTo(mymap);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

L.tileLayer(
  // "https://mars.nasa.gov/mmgis-maps/M20/Layers/Jezero_Balanced_Visible_HiRISE_HRSCcolor_IHS_pansharp/{z}/{x}/{y}.png",
  "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    zoom: 3,
    tms: false,
  }
).addTo(mymap);

L.geoJSON(marsGeoJson).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on("click", onMapClick);
