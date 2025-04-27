'use client';

import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import * as turf from '@turf/turf';
import osmtogeojson from 'osmtogeojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LandInfoModal from './LandInfoModal';

const crops = [
  "Пшениця", "Кукурудза", "Соняшник",
  "Соя", "Ячмінь", "Картопля",
  "Ріпак", "Гречка", "Буряк", "Овочі"
];

function getRandomCrop() {
  return crops[Math.floor(Math.random() * crops.length)];
}

function FarmlandsLayer({ onSelectPlot }: { onSelectPlot: (area: string, crop: string) => void }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
  
    async function fetchFarmlands() {
      const query = `
        [out:json][timeout:25];
        (
          way["landuse"="farmland"](49.0,23.5,50.0,24.5);
        );
        out body;
        >;
        out skel qt;
      `;
      map.zoomControl.remove();

      try {
        const response = await fetch('https://overpass-api.de/api/interpreter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'data=' + encodeURIComponent(query)
        });
  
        const osmData = await response.json();
        const geojson = osmtogeojson(osmData);
  
        const layer = L.geoJSON(geojson, {
          style: {
            color: 'green',
            fillColor: 'lightgreen',
            fillOpacity: 0.5,
            weight: 1
          },
          onEachFeature: (feature, layer) => {
            let area = 0;
            if (feature.geometry.type === "Polygon" || feature.geometry.type === "MultiPolygon") {
              area = turf.area(feature);
            }
            const areaHa = (area / 10000).toFixed(2);
            const crop = getRandomCrop();
  
            layer.bindTooltip(`
              Площа: ${areaHa} га<br>Культура: ${crop}
            `, { sticky: true });

            layer.on('click', () => {
              onSelectPlot(areaHa, crop);
            });
          }
        });
  
        layer.addTo(map);
  
      } catch (error) {
        console.error('Помилка завантаження ділянок:', error);
      }
    }
  
    fetchFarmlands();
  }, [map, onSelectPlot]);

  return null;
}

export default function MapComponent() {
  const [selectedPlot, setSelectedPlot] = useState<null | { area: string; crop: string }>(null);

  const bounds = L.latLngBounds(
    [49.75, 24],
    [49.95, 24.25]
  );

  return (
    <>
      <MapContainer className="absolute inset-0 z-0"  bounds={bounds} style={{ height: '100vh', width: '100vw' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <FarmlandsLayer onSelectPlot={(area, crop) => setSelectedPlot({ area, crop })} />
      </MapContainer>

      {selectedPlot && (
        <LandInfoModal
          area={selectedPlot.area}
          crop={selectedPlot.crop}
          onClose={() => setSelectedPlot(null)}
        />
      )}
    </>
  );
}
