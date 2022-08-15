import DeckGL from '@deck.gl/react/typed';
import { LineLayer, IconLayer } from '@deck.gl/layers/typed';
import { MAPBOX_ACCESS_TOKEN } from './local';

import { Map } from 'react-map-gl';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 35,
  latitude: 31.9,
  zoom: 9,
  pitch: 0,
  bearing: 0,
};

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

// Data to be used by the LineLayer
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
];

const iconLayer = new IconLayer({
  id: 'icon-layer',
  data: pointData,
  pickable: true,
  // iconAtlas and iconMapping are required
  // getIcon: return a string
  iconAtlas:
    'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
  iconMapping: ICON_MAPPING,
  getIcon: (d) => 'marker',

  sizeScale: 10,
  getPosition: (d) => d.coordinates,
  getSize: (d) => 3,
  getColor: (d) => [Math.sqrt(d.exits), 140, 0],
});

// DeckGL react component
function App() {
  const layers = [
    new LineLayer({ id: 'line-layer', data: data2 }),
    new LineLayer({ id: 'line-layer', data }),
    iconLayer,
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </DeckGL>
  );
}

export default App;
