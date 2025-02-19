"use client"; // Ensures it's a client component

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const OpenLayersMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
      ],
      view: new View({
        center: [0, 0], // Coordinates in EPSG:3857 (Web Mercator)
        zoom: 2,
      }),
    });

    return () => map.setTarget(undefined); // Cleanup when unmounting
  }, []);

  return <div ref={mapRef} className="w-full h-[900px]" />;
};

export default OpenLayersMap;
