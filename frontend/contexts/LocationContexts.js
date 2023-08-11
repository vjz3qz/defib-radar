import React, { createContext, useContext } from "react";
import { useCurrentLocation } from "../utils/useCurrentLocation";

const LocationContext = createContext();

export const useLocation = () => {
    return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const locationHook = useCurrentLocation();
  
  return (
    <LocationContext.Provider value={locationHook}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
