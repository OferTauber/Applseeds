import React, { useState } from 'react';
import { render } from 'react-dom';
import { StaticMap } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { points } from './data/points_data';
import { portsData, features } from './data/temp_data';

import IconClusterLayer from './icon-cluster-layer';

// Source data CSV
const DATA_URL = points;
//'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json'; // eslint-disable-line

const MAP_VIEW = new MapView({ repeat: true });
const INITIAL_VIEW_STATE = {
  longitude: 21.685,
  latitude: 27.96,
  zoom: 1,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
};

const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

function renderTooltip(info) {
  const { object, x, y } = info;

  if (info.objects) {
    return (
      <div className="tooltip interactive" style={{ left: x, top: y }}>
        {info.objects.map(({ name, year, mass, class: meteorClass }) => {
          return (
            <div key={name}>
              <h5>{name}</h5>
              <div>Year: {year || 'unknown'}</div>
              <div>Class: {meteorClass}</div>
              <div>Mass: {mass}g</div>
            </div>
          );
        })}
      </div>
    );
  }

  if (!object) {
    return null;
  }

  return object.cluster ? (
    <div className="tooltip" style={{ left: x, top: y }}>
      {object.point_count} records
    </div>
  ) : (
    <div className="tooltip" style={{ left: x, top: y }}>
      {object.name} {object.year ? `(${object.year})` : ''}
    </div>
  );
}

/* eslint-disable react/no-deprecated */
export default function App() {
  const data = DATA_URL;
  const iconMapping = 'data/location-icon-mapping.json';
  const iconAtlas = 'data/location-icon-atlas.png';

  const mapStyle = MAP_STYLE;
  const [hoverInfo, setHoverInfo] = useState({});

  const hideTooltip = () => {
    setHoverInfo({});
  };
  const expandTooltip = (info) => {
    if (info.picked) {
      setHoverInfo(info);
    } else {
      setHoverInfo({});
    }
  };

  const layerProps = {
    pickable: true,
    getPosition: (d) => d.coordinates,
    onHover: !hoverInfo.objects && setHoverInfo,
    iconAtlas,
    iconMapping,
  };

  const layer = new IconClusterLayer({
    ...layerProps,
    data,
    id: 'icon-cluster',
    sizeScale: 40,
    getIcon: (d) =>
      getIconName(d.properties.cluster ? d.properties.point_count : 1),
    getSize: (d) =>
      getIconSize(d.properties.cluster ? d.properties.point_count : 1),
  });

  const portsLayer = new IconClusterLayer({
    ...layerProps,
    id: 'ports-icon',
    data: portsData.features,
    sizeScale: 40,
  });

  return (
    <DeckGL
      layers={[portsLayer]}
      views={MAP_VIEW}
      initialViewState={INITIAL_VIEW_STATE}
      controller={{ dragRotate: true }}
      onViewStateChange={hideTooltip}
      onClick={expandTooltip}
    >
      <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} />

      {renderTooltip(hoverInfo)}
    </DeckGL>
  );
}

export function renderToDOM(container) {
  render(<App />, container);
}
