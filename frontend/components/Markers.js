import { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Markers() {
  const [markers, setMarkers] = useState([
    {
      title: "Apple",
      description:
        "Apple Park is Apple's corporate headquarters located in Cupertino, California, United States.",
      latlng: {
        latitude: 37.330928,
        longitude: -122.007866,
      },
    },
  ]);
  useEffect(() => {
    fetchMarkers();
  }, []);

  const fetchMarkers = async () => {
    try {
      const response = await axios.get(process.env.BACKEND_URL);
      setMarkers(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return markers.map((marker, index) => (
    <Marker
      key={marker.id || index}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
      onPress={handleMarkerPress(marker)}
    />
  ));
}
