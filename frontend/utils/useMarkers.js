import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from 'react-native-config';

export const useMarkers = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [markers, setMarkers] = useState([]);
	const url = Config.BACKEND_URL;
	console.log("Config: ", Config);
	console.log("URL:", url);


	useEffect(() => {
		fetchMarkers().finally(() => setIsLoading(false));
	}, []);

	const fetchMarkers = async () => {
		try {
			const response = await axios.get(url);
			setMarkers(response.data);
		} catch (error) {
			console.log("Error fetching data:", error);
		}
	};

	return { markers, markersIsLoading: isLoading };
};
