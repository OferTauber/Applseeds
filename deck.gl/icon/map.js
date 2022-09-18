import React from 'react';
import DeckGL from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { Map as ReactMapGl } from 'react-map-gl';

import IconClusterLayer from './icon-cluster-layer';

// Source data CSV
const MAP_VIEW = new MapView({ repeat: true });
const INITIAL_VIEW_STATE = {
  longitude: 21.685,
  latitude: 27.96,
  zoom: 1,
  maxZoom: 20,
  pitch: 0,
  bearing: 0,
};

/* eslint-disable react/no-deprecated */
export default function Map({ portsData }) {
  const iconMapping = 'icons_sprites/location-icon-mapping.json';
  // const iconAtlas = 'icons_sprites/location-icon-atlas.png';
  const iconAtlas =
    'https://raw.githubusercontent.com/OferTauber/Applseeds/main/deck.gl/icon/icons_sprite/location-icon-atlas.png';

  const layerProps = {
    pickable: true,
    getPosition: (d) => d.coordinates,
    iconAtlas,
    iconMapping,
    id: 'ports-icon',
    data: portsData.features,
    sizeScale: 40,
  };

  const portsLayer = new IconClusterLayer({
    ...layerProps,
  });

  return (
    <DeckGL
      layers={[portsLayer]}
      views={MAP_VIEW}
      initialViewState={INITIAL_VIEW_STATE}
      controller={{ dragRotate: true }}
      // onClick={expandTooltip}
      getTooltip={(d) => {
        if (!d.object) return null;

        if (d.object.properties) {
          // = Point is a singel port
          return `Port name: ${d.object.properties.portname || 'unknown'}
            Port code: ${d.object.properties.code || 'unknown'}
            Country ${
              d.object.properties.country ||
              d.object.properties.iso3 ||
              d.object.properties.iso3_op ||
              'unknown'
            }`;
        } else {
          // = Point is a cluster
          return d.object.point_count + ' ports';
        }
      }}
    >
      <ReactMapGl
        mapboxAccessToken={
          'pk.eyJ1Ijoib2Zlci10YXViZXIiLCJhIjoiY2w2dXJwc2dqMDBxbzNtbzdua3FwMG51ZCJ9.oMfQfDhdAltuJ2QswUyDsA'
        }
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </DeckGL>
  );
}
