import { useState } from "react";
import axios from "axios";

export const getRoute = () => {

    const [routeDetails, setRouteDetails] = useState(null);

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
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    return { routeDetails, setRouteDetails, getRouteDetails }
}