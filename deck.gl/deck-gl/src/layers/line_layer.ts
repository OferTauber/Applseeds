import { LineLayer } from '@deck.gl/layers/typed';

const data = [
  {
    sourcePosition: [35.2, 31.77],
    targetPosition: [34.8, 32.1],
  },
  {
    sourcePosition: [34.9, 31.87],
    targetPosition: [35.3, 32.2],
  },
];

const data2 = [
  {
    sourcePosition: [34.8, 31.77],
    targetPosition: [35.2, 32.1],
  },
];

export const line1 = new LineLayer({ id: 'line-layer1', data: data2 });
export const line2 = new LineLayer({ id: 'line-layer2', data, pickabl: true });
