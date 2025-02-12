"use client"; // Ensures it's a client component

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import Link from "ol/interaction/Link";
import DragAndDrop from "ol/interaction/DragAndDrop";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import GeoJSON from "ol/format/GeoJSON";

const OpenLayersMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return; // Make sure div exists before initializing map

    const map = new Map({
      target: mapRef.current, // Attach map to div
      view: new View({
        center: [0, 0], // Coordinates in EPSG:3857 (Web Mercator) Default center (longitude, latitude)
        zoom: 2, // Default zoom level
      }),
    });
    map.addInteraction(new Link());

    const source = new VectorSource();
    const layer = new VectorLayer({
      source: source,
    });
    map.addLayer(layer);

    map.addInteraction(
      new DragAndDrop({
        source: source,
        formatConstructors: [GeoJSON],
      })
    );

    return () => map.setTarget(undefined); // Cleanup when unmounting
  }, []);

  return <div ref={mapRef} className="w-full h-[900px] m-0 font-serif " />;
};

export default OpenLayersMap;
