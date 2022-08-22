import React, { useEffect } from 'react';
import { render } from 'react-dom';
import DeckGL from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { portsData } from './icons_sprites/temp_data';
import { MAPBOX_ACCESS_TOKEN } from './local';
import Map from './map';

export default function App() {
  return <Map portsData={portsData} />;
}

export function renderToDOM(container) {
  render(<App />, container);
}
