'use client'

import React from "react";

import { useMap, MapContainer, TileLayer, Popup } from 'react-leaflet'

import './map.css';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles'

import { CustomMarker } from "./custom_marker";
import { AnimItem } from "./anim_item";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { isBrowser } from 'react-device-detect';

import { AnimPlayerPopUp, ANIM_HEIGHT, ANIM_WIDTH } from './youtube_player';

const BROWSER_ZOOM = 2;
const MOBILE_ZOOM = 1;
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
      maxBoundsViscosity={0}
      center={DEFAULT_CENTER}
      zoom={isBrowser ? BROWSER_ZOOM : BROWSER_ZOOM}
      minZoom={isBrowser ? BROWSER_ZOOM : MOBILE_ZOOM}
      maxZoom={9}
      scrollWheelZoom={true}
      style={{ width: props.pageWidth, height: props.pageHeight }}
    >

      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=7efc90e5-1fef-4c34-baaf-9a6c4035d667"
      />
      <ResetButton />
      <MarkerClusterGroup>
        {props.animItems.map((item, index) => {
          return (<CustomMarker key={index} position={{ lat: item.pos.lat, lng: item.pos.lng }}>
            <Popup closeButton={false} maxWidth={ANIM_WIDTH} maxHeight={ANIM_HEIGHT}>
              <div style={{ width: ANIM_WIDTH, height: ANIM_HEIGHT, overflow: "hidden", borderRadius: 5 }}>
                <AnimPlayerPopUp animItem={item} />
              </div>
            </Popup>
          </CustomMarker>)
        })}
      </MarkerClusterGroup>
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
    map.setView(DEFAULT_CENTER, BROWSER_ZOOM)
  }, [map])


  if (ready) {
    return (
      <div className="leaflet-top leaflet-left" style={{ top: 70 }}>
        <div className="leaflet-control leaflet-bar resetButtonContainer">
          <button className="resetButton" onClick={onClick}>⟳</button>
        </div>
      </div>
    )
  }
  else {
    return <></>
  }
})

ResetButton.displayName = "Reset Button"

