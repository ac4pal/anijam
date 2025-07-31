// 'use-client'
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
  selected: boolean,
  setSelected: () => void,
  unselect: () => void,
}

const customIcon = L.icon({
  iconUrl: "./pin.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

const selectedIcon = L.icon({
  iconUrl: "./selectedPin.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

export const CustomMarker = React.memo(({ selected, position, children }: CustomMarkerProps) => {
// eventHandlers={{ click: setSelected }}
  return (
    <Marker  position={position} icon={selected? selectedIcon : customIcon} >
      {children}
    </Marker>
  );
});

CustomMarker.displayName = "Custom Marker"

