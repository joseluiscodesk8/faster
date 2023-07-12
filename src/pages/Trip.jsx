import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import FullScreen from "ol/control/FullScreen";
import Geolocation from "ol/Geolocation";
import { fromLonLat } from "ol/proj";
import styles from "../styles/index.module.scss";

const Trip = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new Map({
        target: mapContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
      });

      const view = new View({
        center: fromLonLat([-0.1276, 51.5074]), // London coordinates
        zoom: 12,
      });

      map.setView(view);

      const geolocation = new Geolocation({
        trackingOptions: {
          enableHighAccuracy: true,
        },
        projection: view.getProjection(),
      });

      geolocation.setTracking(true);

      geolocation.on("change:position", () => {
        const coordinates = geolocation.getPosition();
        view.setCenter(coordinates);
      });

      const fullScreenControl = new FullScreen();
      map.addControl(fullScreenControl);
    }
  }, []);

  return (
    <>
      <section className={styles.mapContainer}>
        <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
      </section>
      <section className={styles.info}>
        <p>7 Trips</p> <p>The Last Trip: 6.5Km</p>
      </section>
    </>
  );
};

export default Trip;
