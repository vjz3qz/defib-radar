import React, { useState } from "react";
import { View } from "react-native";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { useRoute } from "../utils/useRoute";
import LocationContext from "../contexts/LocationContexts";

export default function MapContainer() {
  const { location, setLocation } = React.useContext(LocationContext);
  const { routeDetails, setRouteDetails, getRouteDetails } = useRoute();

  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [showDirections, setShowDirections] = useState(false);

  const handleMarkerPress = (marker) => {
    setSelectedMarkerData(marker);
    setCardOpen(true);
  };

  const handleButtonPress = async (walking, endLat, endLng) => {
    //await getRouteDetails(walking, endLat, endLng);

    // remove this hard coded set route details later
    setRouteDetails({
      coordinates: [
        { latitude: location.latitude, longitude: location.longitude },
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
