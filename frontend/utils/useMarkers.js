import React, { useState, useEffect } from "react";
import axios from "axios";

export const useMarkers = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [markers, setMarkers] = useState([]);

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
};
