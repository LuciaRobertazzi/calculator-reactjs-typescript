const contentArray: {
  row: number;
  content: {
    type: 'number' | 'operation';
    value: string;
    operation:
      | 'plus'
      | 'minus'
      | 'multiply'
      | 'divide'
      | 'clear'
      | 'calculate'
      | 'number';
  }[];
}[] = [
  {
    row: 1,
    content: [
      {
        type: 'number',
        value: '0',
        operation: 'number',
      },
      {
        type: 'operation',
        value: '=',
        operation: 'calculate',
      },
    ],
  },
  {
    row: 2,
    content: [
      {
        type: 'number',
        value: '1',
        operation: 'number',
      },
      {
        type: 'number',
        value: '2',
        operation: 'number',
      },
      {
        type: 'number',
        value: '3',
        operation: 'number',
      },
      {
        type: 'operation',
        value: '+',
        operation: 'plus',
      },
    ],
  },
  {
    row: 3,
    content: [
      {
        type: 'number',
        value: '4',
        operation: 'number',
      },
      {
        type: 'number',
        value: '5',
        operation: 'number',
      },
      {
        type: 'number',
        value: '6',
        operation: 'number',
      },
      {
        type: 'operation',
        value: '-',
        operation: 'minus',
      },
    ],
  },
  {
    row: 4,
    content: [
      {
        type: 'number',
        value: '7',
        operation: 'number',
      },
      {
        type: 'number',
        value: '8',
        operation: 'number',
      },
      {
        type: 'number',
        value: '9',
        operation: 'number',
      },
      {
        type: 'operation',
        value: '&times;',
        operation: 'multiply',
      },
    ],
  },
  {
    row: 5,
    content: [
      {
        type: 'operation',
        value: 'c',
        operation: 'clear',
      },
      {
        type: 'operation',
        value: '%',
        operation: 'divide',
      },
    ],
  },
];

export default contentArray;
