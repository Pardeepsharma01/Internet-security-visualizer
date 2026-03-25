"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';

// Fix for default Leaflet icon in React
export default function MapComponent({ lat, lng, city, country }: { lat: number, lng: number, city?: string, country?: string }) {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  const customIcon = new L.DivIcon({
    className: 'bg-transparent',
    html: `<div style="width: 20px; height: 20px; background: rgba(0,240,255,0.2); border: 2px solid #00f0ff; border-radius: 50%; box-shadow: 0 0 15px #00f0ff; display: flex; align-items: center; justify-content: center;"><div style="width: 6px; height: 6px; background: #00f0ff; border-radius: 50%;"></div></div>`
  });

  const position: L.LatLngExpression = [lat, lng];

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer 
        center={position} 
        zoom={10} 
        style={{ height: '100%', width: '100%', background: '#09090b' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={position} icon={customIcon}>
          <Popup className="cyber-popup">
            <div className="font-mono text-sm">
              <span className="text-[var(--color-neon-blue)] font-bold">LOC:</span> {city || 'Unknown'}, {country || 'Unknown'}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <style>{`
        .leaflet-container {
          background-color: #09090b;
        }
        .leaflet-popup-content-wrapper {
          background-color: #121214;
          color: #e2e8f0;
          border: 1px solid #27272a;
          border-radius: 4px;
        }
        .leaflet-popup-tip {
          background-color: #121214;
        }
      `}</style>
    </div>
  );
}
