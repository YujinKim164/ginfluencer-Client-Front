import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadNaverMap = () => {
      if (window.naver) {
        const mapOptions = {
          center: new window.naver.maps.LatLng(37.507436, 127.026528),
          zoom: 16,
          zoomControl: false,
          mapDataControl: false,
          logoControl: false,
        };

        mapRef.current = new window.naver.maps.Map("map", mapOptions);

        const marker = new window.naver.maps.Marker({
          position: mapOptions.center,
          map: mapRef.current,
        });
      }
    };

    if (window.naver) {
      loadNaverMap();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://openapi.naver.com/openapi/v3/maps.js?clientId=xfl9cymb4g";
      script.onload = loadNaverMap;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}
