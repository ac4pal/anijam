// 'use-client'
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
}

const customIcon = L.icon({
  iconUrl: "./pin.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

export const CustomMarker = React.memo(({ position, children }: CustomMarkerProps) => {


  return (
    <Marker position={position} icon={customIcon} >
      {children}
    </Marker>
  );
});

CustomMarker.displayName = "Custom Marker"

