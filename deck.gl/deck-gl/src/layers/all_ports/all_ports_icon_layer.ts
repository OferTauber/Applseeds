import { IconLayer } from '@deck.gl/layers/typed';
import data from './data';

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

export const portsIconLayer = new IconLayer({
  id: 'ports-icon-layer',
  data: data.features,
  pickable: true,
  // iconAtlas and iconMapping are required
  // getIcon: return a string
  iconAtlas:
    'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
  iconMapping: ICON_MAPPING,
  getIcon: (d) => 'marker',

  sizeScale: 15,
  getPosition: (d) => d.geometry.coordinates,
  getSize: (d) => 3,
  getColor: (d) => [Math.sqrt(d.exits), 140, 0],
});
