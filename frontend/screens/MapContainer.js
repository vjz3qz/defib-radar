import React, { useState } from "react";
import { View } from "react-native";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { routeDetails, setRouteDetails, getRouteDetails } from "../utils/Directions";

export default function MapContainer() {
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [showDirections, setShowDirections] = useState(false);

  const handleMarkerPress = (marker) => {
    setSelectedMarkerData(marker);
    setCardOpen(true);
  };

  const handleButtonPress = async (walking, endLat, endLng) => {
    // await getRouteDetails(
    //   walking,
    //   37.78825,
    //   -122.4324,
    //   endLat,
    //   endLng
    // );
    setRouteDetails({
      coordinates: [
        { latitude: 37.78825, longitude: -122.4324 },
        { latitude: endLat, longitude: endLng },
      ],
    });
    setShowDirections(true);
    setCardOpen(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Map
        onMarkerPress={handleMarkerPress}
        coordinates={
          showDirections && routeDetails ? routeDetails.coordinates : null
        }
      />
      {cardOpen && (
        <InfoCard
          data={selectedMarkerData}
          handleButtonPress={handleButtonPress}
        />
      )}
      {/* {showDirections && routeDetails.directions} create a Directions.js to display. also a way to exit showing directions */}
    </View>
  );
}
