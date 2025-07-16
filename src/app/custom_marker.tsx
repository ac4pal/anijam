// 'use-client'
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
  selected: boolean,
}

const customIcon = L.icon({
  iconUrl: "./pin.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

const selectedIcon = L.icon({
  iconUrl: "./selectedPin.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

export const CustomMarker = React.memo(({ selected, position, children }: CustomMarkerProps) => {
  return (
    <Marker position={position} icon={selected? selectedIcon : customIcon} >
      {children}
    </Marker>
  );
});

CustomMarker.displayName = "Custom Marker"

