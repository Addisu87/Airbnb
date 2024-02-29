"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { useCountries } from "../hooks/getCountries";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const Map = ({ locationValue }: { locationValue: string }) => {
  const { getCountryByValue } = useCountries();
  const latLang = getCountryByValue(locationValue)?.latLang;

  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <>
      <MapContainer
        center={latLang ?? [51.505, -0.09]}
        zoom={4}
        scrollWheelZoom={false}
        className="h-[50vh] rounded-lg z-0"
      >
        <TileLayer attribution={attribution} url={url} />
        <Marker position={latLang ?? [51.505, -0.09]} />
      </MapContainer>
    </>
  );
};

export default Map;
