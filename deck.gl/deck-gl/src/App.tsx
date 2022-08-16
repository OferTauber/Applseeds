import DeckGL from '@deck.gl/react/typed';
import { MAPBOX_ACCESS_TOKEN } from './local';
import { Map } from 'react-map-gl';
import { line1, line2 } from './layers/line_layer';
import { iconLayer } from './layers/icon_layer';
import { geojsonLayer } from './layers/geojson_layer';
import { portsIconLayer } from './layers/all_ports/all_ports_icon_layer';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 135,
  latitude: -28,
  zoom: 4,
  pitch: 0,
  bearing: 0,
};

// DeckGL react component
function App() {
  const layers = [line1, line2, iconLayer, geojsonLayer, portsIconLayer];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      getTooltip={(object: any) =>
        object?.object?.properties?.portname || object?.object?.id
      }
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </DeckGL>
  );
}

export default App;
