import React, { useState } from "react";
import axios from "axios";
import LocationContext from "../contexts/LocationContexts";

export const useRoute = () => {

    const [routeDetails, setRouteDetails] = useState(null);
    const location = React.useContext(LocationContext);

    const getRouteDetails = async (
      walking,
      endLat,
      endLng
    ) => {
      try {
        // GET ROUTE DATA
        const response = await axios.get(
          `${process.env.ROUTING_URL}?destination=${endLat + "," + endLng}
          &mode=${walking ? "walking" : "driving"}
          &origin=${location.latitude + "," + location.longitude}
          &key=${process.env.GOOGLE_MAPS_API_KEY}`
        );
    
        // SET ROUTE
        setRouteDetails(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    return { routeDetails, setRouteDetails, getRouteDetails }
}