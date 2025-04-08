import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Location {
  name: string;
  position: [number, number];
  description?: string;
}

interface InteractiveMapProps {
  center: [number, number];
  zoom: number;
  locations: Location[];
  routePath?: [number, number][];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  center, 
  zoom, 
  locations,
  routePath
}) => {
  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md mb-8">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <div>
                <h3 className="font-bold">{location.name}</h3>
                {location.description && <p>{location.description}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
        
        {routePath && (
          <Polyline 
            positions={routePath}
            color="blue"
            weight={3}
            opacity={0.7}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
