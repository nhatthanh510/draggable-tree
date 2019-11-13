const dummyData = [
  {
    id: 991,
    text: '991',
    children: [],
  },
  {
    id: 992,
    text: '992',
    children: [],
  },
  {
    id: 1,
    text: '1',
    children: [
      {
        id: 11,
        text: ' 1-1',
        children: [
          {
            id: 111,
            text: '1-1-1',
            children: [],
          },
          {
            id: 112,
            text: '1-1-2',
            children: [],
          },
        ],
      },
      {
        id: 12,
        text: '1-2',
        children: [],
      },
    ],
  },
  {
    id: 2,
    text: '2',
    children: [
      {
        id: 21,
        text: '2-1',
        children: [
          {
            id: 211,
            text: ' 2-1-1',
            children: [],
          },
          {
            id: 212,
            text: ' 2-1-2',
            children: [],
          },
        ],
      },
      {
        id: 22,
        text: ' 2-2',
        children: [],
      },
    ],
  },
  {
    id: 3,
    text: '3',
    children: [
      {
        id: 31,
        text: ' 3-1',
        children: [
          {
            id: 311,
            text: ' 3-1-1',
            children: [
              {
                id: 3111,
                text: ' 3-1-1-1',
                children: [],
              },
            ],
          },
          {
            id: 312,
            text: ' 3-1-2',
            children: [],
          },
        ],
      },
    ],
  },
];
export default {
  loadTreeData: async () => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 500);
    });
  },
};
