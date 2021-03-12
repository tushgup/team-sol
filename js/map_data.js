var GoZones = {
  type: "FeatureCollection",
  features: [
    {
      id: "5b1ef35c-c0a8-4bbf-bcce-2ecbb753c4f1",
      properties: { name: "Zone B", ZoneType: "green" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-122.98535011, -8.58554639],
            [-122.11358933, -7.00919461],
            [-119.15622588, -6.18181803],
            [-116.69018917, -7.72657488],
            [-116.39510121, -8.7613659],
            [-116.54916203, -9.36772376],
            [-116.90134664, -10.20670883],
            [-120.02954161, -12.21347527],
            [-122.22537319, -11.73646911],
            [-122.94199861, -11.02305498],
            [-123.22151509, -9.83744347],
            [-122.98535011, -8.58554639],
          ],
        ],
      },
    },
    {
      id: "d804631f-b4d2-4c99-aca3-4b44d3e7048b",
      properties: { name: "Zone C", ZoneType: "green" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-141.81429005, -18.72618522],
            [-139.66201534, -18.09402447],
            [-137.77861085, -19.70154812],
            [-138.05040761, -21.32798364],
            [-139.96725814, -22.33095817],
            [-142.15601177, -21.52827807],
            [-142.2505115, -20.02076337],
            [-141.81429005, -18.72618522],
          ],
        ],
      },
    },
    {
      id: "0e661295-7927-4c11-b274-f3a11efc7d0d",
      properties: { name: "Zone A", ZoneType: "green" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-132.95507397, -7.25654003],
            [-132.09925443, -4.78246444],
            [-130.36784053, -3.40696963],
            [-127.05194852, -4.05631518],
            [-126.05833308, -5.63348319],
            [-125.93754508, -6.8181932],
            [-126.43588359, -7.77966075],
            [-127.81166816, -8.62872261],
            [-129.33468527, -9.26460197],
            [-130.87087082, -9.10208043],
            [-131.50204771, -8.83744006],
            [-132.27086378, -8.23829565],
            [-132.95507397, -7.25654003],
          ],
        ],
      },
    },
  ],
};

var NoGoZones = {
  type: "FeatureCollection",
  features: [
    {
      id: "6aa3e5d5-1d8c-4306-b3d2-dd9cf8506941",
      properties: { name: "No Go Zone 1", radius: 80 },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-113.50189496, -3.37747798] },
    },
    {
      id: "ef20e3d9-cdf3-4875-9339-6cf5fea7907e",
      properties: { name: "No Go Zone 2", radius: 25 },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-133.55063463, -11.83535503] },
    },
    {
      id: "ffec7182-8baf-4b30-9435-0e41c9205424",
      properties: { name: "No Go Zone 3", radius: 100 },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-110.4075987, -18.08510255] },
    },
    {
      id: "fcbe5341-9062-46ad-b1ef-21d1f7a8b366",
      properties: { name: "No Go Zone 4", radius: 60 },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-133.855131, -15.87051492] },
    },
    {
      id: "95ea5626-9e0b-4e33-ac00-c7d7197ea425",
      properties: { name: "No Go Zone 5", radius: 40 },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-140.46915851, -9.35133391] },
    },
  ],
};

var plannedWaypoints = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-142.878465, -14.089349],
          [-132.954745,-7.258252],
        ],
      },
      properties: {
        popupContent:
          "This is a free bus line that will take you across downtown.",
        underConstruction: false,
      },
      id: 1,
    },
    {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-126.442848, -7.768771],
            [-122.984855, -8.585086],
          ],
        },
        properties: {
          popupContent:
            "This is a free bus line that will take you across downtown.",
          underConstruction: false,
        },
        id: 2,
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-122.225459,-11.739157],
            [-132.454826,-20.014266],
          ],
        },
        properties: {
          popupContent:
            "This is a free bus line that will take you across downtown.",
          underConstruction: false,
        },
        id: 3,
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-132.454826,-20.014266],
            [-138.050121, -21.327812]
          ],
        },
        properties: {
          popupContent:
            "This is a free bus line that will take you across downtown.",
          underConstruction: false,
        },
        id: 4,
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
              [-141.814339,-18.727417],
              [-142.878465, -14.089349],
            ],
        },
        properties: {
          popupContent:
            "This is a free bus line that will take you across downtown.",
          underConstruction: false,
        },
        id: 5,
      },
  ],
};

var actualWaypoints = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-142.878465, -14.089349],
            [-132.954745,-7.258252],
          ],
        },
        properties: {
          popupContent:
            "This is a free bus line that will take you across downtown.",
          underConstruction: false,
        },
        id: 1,
      },
      {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-126.442848, -7.768771],
              [-122.984855, -8.585086],
            ],
          },
          properties: {
            popupContent:
              "This is a free bus line that will take you across downtown.",
            underConstruction: false,
          },
          id: 2,
        },
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-122.225459,-11.739157],
              [-132.454826,-20.014266],
            ],
          },
          properties: {
            popupContent:
              "This is a free bus line that will take you across downtown.",
            underConstruction: false,
          },
          id: 3,
        },
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-132.454826,-20.014266],
              [-138.050121, -21.327812]
            ],
          },
          properties: {
            popupContent:
              "This is a free bus line that will take you across downtown.",
            underConstruction: false,
          },
          id: 4,
        },
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
                [-141.814339,-18.727417],
                [-142.878465, -14.089349],
              ],
          },
          properties: {
            popupContent:
              "This is a free bus line that will take you across downtown.",
            underConstruction: false,
          },
          id: 5,
        },
        {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-132.954745,-7.258252],
                [-130.62485398, -5.76933376],
                ],
            },
            properties: {
            },
            id: 6,
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-130.62485398, -5.76933376],
                [-129.626578, -7.930807]
                ],
            },
            properties: {
            },
            id: 7,
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-129.626578, -7.930807],
                [-126.770133, -6.165219]
                ],
            },
            properties: {
            },
            id: 8,
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-126.770133, -6.165219],
                [-126.442847, -7.768764]
                ],
            },
            properties: {
            },
            id: 9,
          },
    ],
  };

var markerLabels = {
  type: "FeatureCollection",
  features: [
    {
      id: "53da4d07-9289-4102-a013-ea5b5ec2bdf5",
      properties: { type: "site" },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-130.62485398, -5.76933376] },
    },
    {
      id: "dc38a992-3975-4b49-b0c6-cad58e0db41b",
      properties: { type: "habitat" },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-142.878465, -14.089349] },
    },
    // {
    //   id: "044c31aa-9d42-447a-973f-a22cdc9032c9",
    //   properties: { type: "ev" },
    //   type: "Feature",
    //   geometry: { type: "Point", coordinates: [-132.954745,-7.258252] },
    // },
    {
      id: "1fb75535-efb7-4cbe-9a31-a6e59b24d936",
      properties: { type: "site" },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-129.626578, -7.930807] },
    },
    {
      id: "b093ab86-278e-4cb8-8f55-42fa27f746a4",
      properties: { type: "site" },
      type: "Feature",
      geometry: { type: "Point", coordinates: [-126.770133, -6.165219] },
    },
    {
        id: "b093ab86-278e-4cb8-8f55-42fa27f7dfsfsdf",
        properties: { type: "site" },
        type: "Feature",
        geometry: { type: "Point", coordinates: [-124.737498, -27.439331] },
      },
  ],
};
