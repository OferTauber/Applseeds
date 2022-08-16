import { IconLayer } from '@deck.gl/layers/typed';

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

const pointData = [
  {
    name: 'Colma (COLM)',
    address: '365 D Street, Colma CA 94014',
    exits: 4214,
    coordinates: [35, 32],
  },
  {
    name: 'Dead sea',
    // address: '365 D Street, Colma CA 94014',
    // exits: 4214,
    coordinates: [35.5, 31.5],
  },
  {
    name: 'Jerusalem',
    coordinates: [35.2, 31.77],
  },
  {
    name: 'Arad',
    coordinates: [35.215, 31.262],
  },
  {
    name: 'Port',
    coordinates: [116.69786959, -19.67559961],
  },
];

export const iconLayer = new IconLayer({
  id: 'icon-layer',
  data: pointData,
  pickable: true,
  // iconAtlas and iconMapping are required
  // getIcon: return a string
  iconAtlas:
    'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
  iconMapping: ICON_MAPPING,
  getIcon: (d) => 'marker',

  sizeScale: 15,
  getPosition: (d) => d.coordinates,
  getSize: (d) => 3,
  getColor: (d) => [Math.sqrt(d.exits), 140, 0],
});
