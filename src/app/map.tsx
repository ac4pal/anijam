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

import { AnimPlayerPopUp, ANIM_WIDTH } from './youtube_player';

const ZOOM = 2;
const DEFAULT_CENTER = { lat: 0, lng: 0 };


export interface MapProps {
  animItems: AnimItem[],
  pageWidth: number,
  pageHeight: number,
  showTable: boolean,
  selectedId: string,
  setSelectedId: (id: string) => void,
}

export default function Map(props: MapProps) {
  return (<MapComponent setSelectedId={props.setSelectedId} selectedId={props.selectedId} showTable={props.showTable} animItems={props.animItems} pageWidth={props.pageWidth} pageHeight={props.pageHeight} />)
}


const MapComponent = React.memo((props: MapProps) => {

  function selectedMarker(): AnimItem | null {
    const items = props.animItems.filter(item => item.youtubeId === props.selectedId)
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
      maxZoom={9}
      scrollWheelZoom={true}
      style={{ width: props.showTable ? "65%" : "100%", height: "100vh" }}
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
      <MapCluserGroup setSelectedId={props.setSelectedId} selectedId={props.selectedId} animItems={props.animItems} />
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

  const isProd = process.env.NODE_ENV === 'production';

  if (ready) {
    return (
      <div className="leaflet-top leaflet-left" style={{ top: 70 }}>
        <div className="leaflet-control leaflet-bar resetButtonContainer">
          <button className="resetButton" onClick={onClick}>
            <img style={{ width: "80%", height: "80%" }} src={isProd ? "/anijam/reset.svg" : "/reset.svg"} alt="reset" />
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
      L.latLng(item.pos.lat - 2, item.pos.lng - 2),
      L.latLng(item.pos.lat + 2, item.pos.lng + 2)
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

const MapCluserGroup = React.memo(({ setSelectedId, selectedId, animItems }: { setSelectedId: (id: string) => void, selectedId: string, animItems: AnimItem[] }) => {
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
          <CustomMarker setSelected={() => {
              setSelectedId(item.youtubeId)
          }} unselect={() => {setSelectedId("")}} selected={item.youtubeId === selectedId} key={`${item.author}`} position={{ lat: item.pos.lat, lng: item.pos.lng }}>
            <Popup closeButton={false} minWidth={ANIM_WIDTH} maxWidth={ANIM_WIDTH} >
              <CustomPopup item={item} />
            </Popup>
          </CustomMarker>)
      })}
    </MarkerClusterGroup>
  )
})

MapCluserGroup.displayName = "MapCluserGroup"

const CustomPopup = React.memo(({item} : {item: AnimItem}) => {


  return <div className="popupContainer">
    <AnimPlayerPopUp animItem={item} />
    <div className="metaInfoContainer">
      <div className="authorInfo">{item.title} - {item.author}</div>
      <div className="locationInfo">{item.posString}</div>
    </div>
  </div>
})

CustomPopup.displayName = "CustomPopup"
