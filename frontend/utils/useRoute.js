import React, { useState } from "react";
import axios from "axios";
import polyline from "@mapbox/polyline";

export const useRoute = () => {
	const mockApiResponse = {
		status: "OK",
		routes: [
			{
				bounds: {
					northeast: { lat: 40.7766, lng: -73.982 },
					southwest: { lat: 40.7488, lng: -74.006 },
				},
				legs: [
					{
						start_location: { lat: 40.748817, lng: -73.985428 },
						end_location: { lat: 40.748817, lng: -73.985428 },
						steps: [
							{
								html_instructions: "Head <b>north</b> on <b>5th Ave</b>",
								distance: { text: "0.2 mi", value: 322 },
								duration: { text: "1 min", value: 78 },
								start_location: { lat: 40.748817, lng: -73.985428 },
								end_location: { lat: 40.751551, lng: -73.9856 },
								polyline: {
									points:
										"a~l~Fjk~uOnzh@vlbBtc~@tsE`vnApw{A`dw@~w\\|tNtqf@l{Yd_Fblh@rxo@",
								},
								maneuver: "head-north",
							},
							// {
							// 	html_instructions: "Turn <b>left</b> at <b>42nd St</b>",
							// 	distance: { text: "0.1 mi", value: 160 },
							// 	duration: { text: "1 min", value: 34 },
							// 	start_location: { lat: 40.751551, lng: -73.9856 },
							// 	end_location: { lat: 40.7524, lng: -73.9822 },
							// 	polyline: {
							// 		points: "gqo~FjtyuO?????????????????????????????????????????????"
							// 	},
							// 	maneuver: "turn-left"
							// },
							// ... more steps as needed
						],
					},
				],
			},
		],
	};

	const [routeDetails, setRouteDetails] = useState(null);

	const parseResponse = (response) => {
		// checks if a response was received and the status is 'OK'
		if (!response || response.status != "OK") return [];

		const route = response.routes[0]; // the first route listed is the most optimal
		const leg = route.legs[0];

		const coordinates = [];
		const directions = [];
		for (const step of leg.steps) {
			// iterates through each step in the route
			const decodedPoints = polyline.decode(step.polyline.points); // gets all points along the route

			// getting the detail about the directions to be provided in Directions.js component
			const directionDetail = {
				distance: step.distance.text,
				instruction: step.html_instructions,
				maneuver: step.maneuver,
			};
			directions.push(directionDetail);
			for (const point of decodedPoints) {
				coordinates.push({ latitude: point[0], longitude: point[1] }); // pushes the coordinates of each point along the route to the coordinates array
			}
		}

		const lastStep = leg.steps[leg.steps.length - 1];
		coordinates.push({
			latitude: lastStep.end_location.lat,
			longitude: lastStep.end_location.lng,
		});

		return { coordinates, directions };
	};

	const getRouteDetails = async (
		walking,
		startLat,
		startLng,
		endLat,
		endLng
	) => {
		try {
			// GET ROUTE DATA
			// const response = await axios.get(
			// 	`${process.env.ROUTING_URL}?destination=${endLat + "," + endLng}
			// &mode=${walking ? "walking" : "driving"}
			// &origin=${startLat + "," + startLng}
			// &key=${process.env.GOOGLE_MAPS_API_KEY}`
			// );

			// SET ROUTE
			const routeDetail = parseResponse(mockApiResponse);
			setRouteDetails(routeDetail);
		} catch (error) {
			console.log("Error fetching data:", error);
		}

		// const route = {
		// 	coordinates: [
		// 		{ latitude: startLat, longitude: startLng },
		// 		{ latitude: endLat, longitude: endLng },
		// 	],
		// };
		// setRouteDetails(getRouteDetails().coordinates); // remove this hard coded set route details later
	};

	return { routeDetails, setRouteDetails, getRouteDetails };
};
