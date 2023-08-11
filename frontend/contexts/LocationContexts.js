import React, { createContext, useContext } from "react";
import { useCurrentLocation } from "../utils/useCurrentLocation";

const LocationContext = createContext();

export const useLocation = () => {
    return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const { location } = useCurrentLocation();
  
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
