// 'use-client'
import React from "react";
import "leaflet/dist/leaflet.css";
import { Marker } from 'react-leaflet';
import L, { Marker as LeafletMarker } from 'leaflet';

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
  selected: boolean,
  setSelected: () => void,
}

const customIcon = L.icon({
  iconUrl: "./pin.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});


export type CustomMarkerType = typeof CustomMarker;


export const CustomMarker = React.memo(({ selected, position, children }: CustomMarkerProps) => {
  const markerRef = React.useRef<LeafletMarker | null>(null);

  React.useEffect(() => {
    if (selected) {

      setTimeout(() => {
        markerRef.current?.openPopup();
      }, 200)

    }
  }, [selected])


  return (
    <Marker ref={markerRef} position={position} icon={customIcon} >
      {children}
    </Marker>
  );
});

CustomMarker.displayName = "Custom Marker"

