import React, { useState, useEffect } from "react";
import axios from "axios";

export const useMarkers = () => {
    const [isLoading, setIsLoading] = useState(true);
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
      fetchMarkers().finally(() => setIsLoading(false));
    }, []);
  
    const fetchMarkers = async () => {
      try {
        const response = await axios.get(process.env.BACKEND_URL);
        setMarkers(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    return { markers, markersIsLoading: isLoading };
}
