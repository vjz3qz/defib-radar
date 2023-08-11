import { Marker } from "react-native-maps";
import React from "react";
import { useMarkers } from "../utils/useMarkers";

export default function Markers({ onMarkerPress }) {
  const { markers } = useMarkers();

  return markers.map((marker, index) => (
    <Marker
      key={marker.id || index}
      coordinate={marker.latlng}
      title={marker.name}
      description={marker.description}
      onPress={() => onMarkerPress ? onMarkerPress(marker) : null }
    />
  ));
}
