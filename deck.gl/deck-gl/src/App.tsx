import DeckGL from '@deck.gl/react/typed';
import { LineLayer } from '@deck.gl/layers/typed';
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

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [35.2, 31.77],
    targetPosition: [34.8, 32.1],
  },
];

// DeckGL react component
function App() {
  const layers = [new LineLayer({ id: 'line-layer', data })];

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
