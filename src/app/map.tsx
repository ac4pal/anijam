'use client'

import React from "react";

import { useMap, MapContainer, TileLayer, Popup, ZoomControl } from 'react-leaflet'

import L from 'leaflet';
import './map.css';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles'

import { CustomMarker } from "./custom_marker";
import { AnimItem } from "./anim_item";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MarkerClusterGroup as LeafletMarkerClusterGroup } from 'leaflet';

import { AnimPlayerPopUp, ANIM_WIDTH } from './youtube_player';

const ZOOM = 2;
const DEFAULT_CENTER = { lat: 0, lng: 0 };


export interface MapProps {
  animItems: AnimItem[],
  pageWidth: number,
  pageHeight: number,
  showTable: boolean,
  selectedItem: AnimItem | null,
  isDarkMode: boolean,
  setSelectedItem: (item: AnimItem) => void,
  mapReady: () => void
}

export default function Map(props: MapProps) {
  return (<MapComponent isDarkMode={props.isDarkMode} mapReady={props.mapReady} setSelectedItem={props.setSelectedItem} selectedItem={props.selectedItem} showTable={props.showTable} animItems={props.animItems} pageWidth={props.pageWidth} pageHeight={props.pageHeight} />)
}


const MapComponent = React.memo((props: MapProps) => {

  React.useEffect(() => {

    props.mapReady()
  }, [])


  function selectedMarker(): AnimItem | null {
    const items = props.animItems.filter(item => item === props.selectedItem)
    if (items.length > 0) {
      return items[0]
    }
    return null;
  }


  return (
    <MapContainer
      center={DEFAULT_CENTER}
      maxBoundsViscosity={1.0}
      zoom={ZOOM}
      minZoom={ZOOM}
      maxZoom={10}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100vh" }}
    >

      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=7efc90e5-1fef-4c34-baaf-9a6c4035d667"
      />
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'

        url="https://tiles.stadiamaps.com/tiles/stamen_terrain_labels/{z}/{x}/{y}.png?api_key=7efc90e5-1fef-4c34-baaf-9a6c4035d667"
      />
      <SetMapBounds />
      <ZoomToMarker item={selectedMarker()} />
      <MapCluserGroup setSelectedItem={props.setSelectedItem} selectedItem={props.selectedItem} animItems={props.animItems} />
      <ZoomControl position="bottomright" />

      <ResetButton isDarkMode={props.isDarkMode} />

    </MapContainer>
  )
})

MapComponent.displayName = "Map Component"

const ResetButton = React.memo(({ isDarkMode }: { isDarkMode: boolean }) => {
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


  function src(): string {
    const isProd = process.env.NODE_ENV === 'production';
    if (isProd) {
      return isDarkMode ? "/anijam/reset_dark.svg" : "/anijam/reset.svg";
    }
    else {
      return isDarkMode ? "/reset_dark.svg" : "/reset.svg";
    }
  }

  if (ready) {
    return (
      <div className="leaflet-bottom leaflet-left">
        <div className="leaflet-control leaflet-bar resetButtonContainer">
          <button className="resetButton" onClick={onClick}>
            <img style={{ width: "80%", height: "80%" }} src={src()} alt="reset" />
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

const ZoomToMarker = ({ item }: { item: AnimItem | null }) => {


  const map = useMap();

  React.useEffect(() => {

    if (!item) {
      return
    }
    const bounds = L.latLngBounds(
      L.latLng(item.pos.lat - 0.1, item.pos.lng - 0.1),
      L.latLng(item.pos.lat + 0.1, item.pos.lng + 0.1)
    );

    map.fitBounds(bounds);

  }, [item]);


  return null;
}
const SetMapBounds = () => {
  const map = useMap();

  React.useEffect(() => {
    const bounds = L.latLngBounds(
      L.latLng(-90, -200),
      L.latLng(90, 200)
    );
    map.setMaxBounds(bounds);

  }, [map]);


  return null;
};

const MapCluserGroup = React.memo(({ setSelectedItem, selectedItem, animItems }: { setSelectedItem: (item: AnimItem) => void, selectedItem: AnimItem | null, animItems: AnimItem[] }) => {
  const markerClusterRef = React.useRef<LeafletMarkerClusterGroup>(null);


  React.useEffect(() => {
    if (markerClusterRef.current) {
      setTimeout(() => {
        if (!markerClusterRef.current) {
          return;
        }
        const clusters = markerClusterRef.current.getLayers();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const targetMarker = clusters.find((layer: any) => {
          if (selectedItem) {
            const layerLatLng = layer.getLatLng()
            return layerLatLng.lat === selectedItem.pos.lat && layerLatLng.lng === selectedItem.pos.lng
          }
        });

        if (targetMarker && targetMarker instanceof L.Marker) {
          markerClusterRef.current.zoomToShowLayer(targetMarker, () => {
            targetMarker.openPopup();
          });
        }

      }, 100)
    }


  }, [selectedItem]);


  return (
    <MarkerClusterGroup 
      spiderfyOnMaxZoom={true}
      ref={markerClusterRef} 
      maxClusterRadius={40}
      removeOutsideVisibleBounds={true}>
      {animItems.map((item) => {
        return (
          <CustomMarker setSelected={() => {
            setSelectedItem(item)
          }} selected={item === selectedItem} key={`${item.id}`} position={{ lat: item.pos.lat, lng: item.pos.lng }}>
            <Popup closeButton={false} minWidth={ANIM_WIDTH} maxWidth={ANIM_WIDTH} >
              <CustomPopup item={item} />
            </Popup>
          </CustomMarker>)
      })}
    </MarkerClusterGroup>
  )
})

MapCluserGroup.displayName = "MapCluserGroup"

const CustomPopup = React.memo(({ item }: { item: AnimItem }) => {
  return <div className="popupContainer">
    <AnimPlayerPopUp animItem={item} />
    <div className="metaInfoContainer">
      <div className="authorInfo">{item.title} - {item.author}</div>
      <div className="locationInfo">{item.posString}</div>
    </div>
  </div>
})

CustomPopup.displayName = "CustomPopup"
