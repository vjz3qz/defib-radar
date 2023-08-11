import React, { useState } from "react";
import { View } from "react-native";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import axios from "axios";

export default function MapContainer() {
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
  const [routeDetails, setRouteDetails] = useState(null);
  const [showDirections, setShowDirections] = useState(false);

  const getRouteDetails = async (
    walking,
    startLat,
    startLng,
    endLat,
    endLng
  ) => {
    try {
      // GET ROUTE DATA
      const response = await axios.get(
        `${process.env.ROUTING_URL}?destination=${endLat + "," + endLng}
        &mode=${walking ? "walking" : "driving"}
        &origin=${startLat + "," + startLng}
        &key=${process.env.GOOGLE_MAPS_API_KEY}`
      );

      // SET ROUTE
      setRouteDetails(response.data);
      const data = await response.json();
      return data.routes[0].legs[0].steps;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleMarkerPress = (marker) => {
    setSelectedMarkerData(marker);
    setCardOpen(true);
  };

  const handleButtonPress = async (walking, endLat, endLng) => {
    // const directions = await getRouteDetails(
    //   walking,
    //   37.78825,
    //   -122.4324,
    //   endLat,
    //   endLng
    // );
    setShowDirections(true);
    setCardOpen(false);
    }

  return (
    <View style={{ flex: 1 }}>
      <Map onMarkerPress={handleMarkerPress} showDirections={showDirections} coordinates={routeDetails ? routeDetails.coordinates : null} />
      {cardOpen && <InfoCard data={selectedMarkerData} handleButtonPress={handleButtonPress} />}
      {/* {showDirections && routeDetails.directions} create a Directions.js to display */}
    </View>
  );
}
