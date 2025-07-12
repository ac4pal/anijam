'use client'

import React from "react";

import { useMap, MapContainer, TileLayer, Popup } from 'react-leaflet'


import L from 'leaflet';
import './map.css';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles'

import { CustomMarker } from "./custom_marker";
import { AnimItem } from "./anim_item";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { isBrowser } from 'react-device-detect';

import { AnimPlayerPopUp, ANIM_HEIGHT, ANIM_WIDTH } from './youtube_player';

const ZOOM = 2;
const DEFAULT_CENTER = { lat: 0, lng: 0 };


export interface MapProps {
  animItems: AnimItem[],
  pageWidth: number,
  pageHeight: number,
}

export default function Map(props: MapProps) {
  return (<MapComponent animItems={props.animItems} pageWidth={props.pageWidth} pageHeight={props.pageHeight} />)
}


const MapComponent = React.memo((props: MapProps) => {

  return (
    <MapContainer
      center={DEFAULT_CENTER}
      maxBoundsViscosity={1.0}
      zoom={isBrowser ? ZOOM : ZOOM}
      minZoom={isBrowser ? ZOOM : ZOOM}
      maxZoom={9}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100vh"}}
    >

      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=7efc90e5-1fef-4c34-baaf-9a6c4035d667"
      />
      <SetMapBounds />
      <MapCluserGroup animItems={props.animItems} />
      <ResetButton />

    </MapContainer>
  )
})

MapComponent.displayName = "Map Component"

const ResetButton = React.memo(() => {
  const map = useMap()


  const [ready, setReady] = React.useState(false)
  React.useEffect(() => {
    if (map) {
      setReady(true)
    }
  }, [map])

  const onClick = React.useCallback(() => {
    map.setView(DEFAULT_CENTER, ZOOM)
  }, [map])


  if (ready) {
    return (
      <div className="leaflet-top leaflet-left" style={{ top: 70 }}>
        <div className="leaflet-control leaflet-bar resetButtonContainer">
          <button className="resetButton" onClick={onClick}>
            <img style={{width: "80%", height: "80%"}}src="/reset.svg" alt="reset" />
          </button>
        </div>
      </div>
    )
  }
  else {
    return <></>
  }
})

ResetButton.displayName = "Reset Button"

const SetMapBounds = ()  => {
  const map = useMap();

  React.useEffect(() => {
    const bounds = L.latLngBounds(
      L.latLng(-60, -180),
      L.latLng(60, 180)
    );
    map.setMaxBounds(bounds);

  }, [map]);


  return null;
};

const MapCluserGroup = React.memo(({ animItems }: { animItems: AnimItem[] }) => {
  const markerClusterRef = React.useRef<typeof MarkerClusterGroup | null>(null);

  const map = useMap();

  React.useEffect(() => {

    const handleMoveEnd = () => {
      markerClusterRef.current?.refreshClusters();
    };

    map.on('moveend', handleMoveEnd);
    return () => {
      map.off('moveend', handleMoveEnd);
    };
  }, [map])



  return (
    <MarkerClusterGroup ref={markerClusterRef} removeOutsideVisibleBounds={true}>
      {animItems.map((item) => {
        return (
          <CustomMarker key={`${item.author}`} position={{ lat: item.pos.lat, lng: item.pos.lng }}>
            <Popup closeButton={false} maxWidth={ANIM_WIDTH} maxHeight={ANIM_HEIGHT}>
              <div style={{ width: ANIM_WIDTH, height: ANIM_HEIGHT, overflow: "hidden", borderRadius: 5 }}>
                <AnimPlayerPopUp animItem={item} />
              </div>
            </Popup>
          </CustomMarker>)
      })}
    </MarkerClusterGroup>
  )
})

MapCluserGroup.displayName = "MapCluserGroup"