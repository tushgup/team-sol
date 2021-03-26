var GoZones = {
  type: "FeatureCollection",
  features: [
    {
      id: "5b1ef35c-c0a8-4bbf-bcce-2ecbb753c4f1",
      properties: { name: "Zone B", timing: '10:00 - 11:00', eta: '10:15', ZoneType: "green" },
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
      properties: { name: "Zone C", timing: '12:30 - 01:30', eta: '12:45', ZoneType: "green" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-141.81429005, -18.72618522],
            [-139.66201534, -18.09402447],
            [-137.77861085, -19.70154812],
            [-136.491121, -21.018903],
            [-140.161243, -23.378536],
            [-143.055204, -21.984838],
            [-143.765066, -19.993745],
            [-141.81429005, -18.72618522],
          ],
        ],
      },
    },
    {
      id: "0e661295-7927-4c11-b274-f3a11efc7d0d",
      properties: { name: "Zone A", timing: '09:00 - 09:30', eta: '09:00', ZoneType: "green" },
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
          [-132.954745, -7.258252],
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
          [-122.225459, -11.739157],
          [ -136.482597, -21.022926],
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
          [-141.814339, -18.727417],
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
          [-132.954745, -7.258252],
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
          [-122.225459, -11.739157],
          [-132.454826, -20.014266],
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
          [-132.454826, -20.014266],
          [-138.050121, -21.327812],
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
          [-141.814339, -18.727417],
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
    // {
    //     type: "Feature",
    //     geometry: {
    //       type: "LineString",
    //       coordinates: [
    //         [-132.954745,-7.258252],
    //         [-130.62485398, -5.76933376],
    //         ],
    //     },
    //     properties: {
    //     },
    //     id: 6,
    //   },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "LineString",
    //     coordinates: [
    //       [-130.62485398, -5.76933376],
    //       [-129.626578, -7.930807]
    //       ],
    //   },
    //   properties: {
    //   },
    //   id: 7,
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "LineString",
    //     coordinates: [
    //       [-129.626578, -7.930807],
    //       [-126.770133, -6.165219]
    //       ],
    //   },
    //   properties: {
    //   },
    //   id: 8,
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "LineString",
    //     coordinates: [
    //       [-126.770133, -6.165219],
    //       [-126.442847, -7.768764]
    //       ],
    //   },
    //   properties: {
    //   },
    //   id: 9,
    // },
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

var NoGoZones2 = {
  type: "FeatureCollection",
  features: [
    {
      id: "d8e86998-be92-449a-a67c-b257628acc85",
      properties: { name: "No Go Zone", reason: 'Jagged Rock Formation'},
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-141.89376392, -10.84019651],
            [-138.75575472, -10.42777585],
            [-138.45490962, -8.31087393],
            [-142.42986304, -6.15147119],
            [-143.1310373, -8.82747674],
            [-141.89376392, -10.84019651],
          ],
        ],
      },
    },
    {
      id: "3b8db375-9f1f-43a7-bae4-33f06d85c6c0",
      properties: { name: "No Go Zone", reason: 'Bumpy terrain' },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-111.06432179, -2.66359998],
            [-114.92108857, -2.99172809],
            [-117.82153672, 0.18122708],
            [-116.35284325, 0.7496748],
            [-112.78436535, 0.7496748],
            [-110.22077303, -0.40589362],
            [-111.06432179, -2.66359998],
          ],
        ],
      },
    },
    {
      id: "4e3ebd81-72e9-4e7d-8c3a-ce69ec70533b",
      properties: { name: "No Go Zone", reason: 'Jagged Rock Formation' },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-132.70520563, -12.0022819],
            [-131.72982265, -11.80021636],
            [-131.3914554, -10.89657553],
            [-132.19396518, -10.89657553],
            [-133.3755947, -10.89657553],
            [-133.3755947, -11.90388718],
            [-132.70520563, -12.0022819],
          ],
        ],
      },
    },
    {
      id: "7ab36003-3fc0-4021-bd3d-9533198c8b7e",
      properties: { name: "No Go Zone", reason: 'Jagged Rock Formation' },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-132.83952594, -12.5886292],
            [-134.06495786, -12.54273679],
            [-135.25436138, -12.8665503],
            [-135.25436138, -13.40637753],
            [-134.14262015, -13.56683177],
            [-133.29382389, -13.52024408],
            [-132.83952594, -12.5886292],
          ],
        ],
      },
    },
    {
      id: "a9a5445e-65fe-4547-ae1f-985d513b509d",
      properties: { name: "No Go Zone", reason: 'Jagged Rock Formation' },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-115.41646807, -23.02389677],
            [-116.41805583, -21.84614115],
            [-116.15516158, -19.18621732],
            [-113.06759645, -18.2500256],
            [-111.84338446, -20.63064442],
            [-111.67849644, -23.99318246],
            [-115.95741725, -24.65907766],
            [-115.41646807, -23.02389677],
          ],
        ],
      },
    },
  ],
};