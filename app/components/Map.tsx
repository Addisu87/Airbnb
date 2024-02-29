"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import { useCountries } from "../hooks/getCountries";

const Map = ({ locationValue }: { locationValue: string }) => {
  const { getCountryByValue } = useCountries();
  const latLang = getCountryByValue(locationValue)?.latLang;

  const ICON = icon({
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjeIpitKlqtU_y2C2zdBLaHgP2_5WeWO67WVlIQFz2Q&s",
    iconSize: [50, 50],
  });

  return (
    <>
      <MapContainer
        center={latLang ?? [51.505, -0.09]}
        zoom={4}
        scrollWheelZoom={false}
        className="h-[50vh] rounded-lg z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latLang ?? [51.505, -0.09]} icon={ICON} />
      </MapContainer>
    </>
  );
};

export default Map;
