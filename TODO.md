# TODO

- [x] Models/Database
  - [x] create Defibrillator model
  - [x] run migrations to create tables
  - [x] ensure database set up in settings.py
  - [x] Add json serializer for Defibrillator
- [ ] Views/Routes/APIs
  - [ ] learn about views
  - [ ] learn about MVC architecture
  - [x] create class based views for Defibrillator HTTP CRUD ops
  - [x] define URLS for views to URL config in url.py
- [ ] Open Data DC API
    - [x] Fetch Defibrillator data
    - [ ] Parse data and store in postgres (Sanya)
    - [ ] script that regularly fetches and updates data: Cron Job (Varun)
    - [ ] endpoint that serves AED data to frontend
- [ ] Frontend
    - [x] Display Map in frontend
    - [ ] Enable routing: current location to destination coordinate
    - [ ] support CRUD ops to backend: get list, get id
    - [ ] React components
    - [ ] tailwind styling
- [ ] Testing
    - [ ] Write tests for Django views
    - [ ] Write tests for React components 
    - [ ] Write tests for Google Maps API
- [ ] Deployment
    - [ ] Deploy to AWS
    - [ ] Set up production database
    - [ ] Migrate data



<!-- 

Static Route Line: Display the route line on the map from the start to the destination. This gives users a visual representation of the path to follow.



Current Location Marker: Display the user's current location on the map with an updating marker. Combined with the static route line, this helps the user see where they are in relation to the planned route.

Basic Off-Route Detection: If the user goes off the route, display a simple notification suggesting they return to the route. This won't offer re-routing but serves as a basic indicator when they've gone astray.

Distance & ETA: Provide an estimated time of arrival and the remaining distance to the destination. This can be calculated based on the remaining steps and average speeds for the type of roads.

List of Directions: Instead of dynamic voice prompts or constant updates, provide a static list of turn-by-turn directions (e.g., "Turn right on Main St.", "Continue for 2 miles", "Turn left on Elm St."). The user can refer to this list as they navigate.

Manual "Next Step" Button: Instead of automated prompts, provide a button for users to manually move to the next navigation step when they've completed the current one.
Routing Functionality:

This is important because your users will need to know how to get from their current location to the marker's location.
For this, you could use third-party services like Mapbox, Google Maps Directions API, or any other free service you may find.
Once you receive the route information from these services, you can draw the route on the MapView using the Polyline component.
Fetching Real Marker Data:

While you have hardcoded marker data right now, eventually you will need to integrate with your backend to fetch real markers.
This will involve setting up API calls, handling responses, and error scenarios.
Enhancing the InfoCard:

Make sure the InfoCard has all the necessary details your users might need.
Incorporate the button to initiate routing from the user's location to the marker. When this button is clicked, trigger the routing functionality to get and display the route.
Enhanced User Experience:

Consider adding loading indicators while fetching data or calculating routes.
Handle possible error scenarios gracefully, like if there's no internet connection, the routing service is unavailable, etc.
Maybe add features like zooming into a route, showing estimated time and distance, etc.
Optimizations and Testing:

Once all functionalities are in place, test them on various devices and screen sizes to ensure they work smoothly.
Optimize performance, especially if you notice lag when loading routes or fetching marker data.
Additional Features (if desired):

Turn-by-turn navigation.
User reviews or ratings for locations.
Search functionality to find places.




Create an endpoint to serve AED data: Once your database is populated with AED data, you'll need to create endpoints in your Django app to serve this data to the frontend.

Set up Google Maps API in your frontend: You'll need to include the Google Maps JavaScript API in your frontend to display maps and routes.

Display AEDs on a map: Using data from your backend and the Google Maps API, display the locations of the AEDs on a map.

Create route to nearest AED: Implement functionality to find the nearest AED to a user's location and display a route on the map.



Test your application: Write tests for your Django views and your React components to make sure everything is working as expected.

Deploy your application: Once everything is working locally, you can deploy your application. You might choose to use AWS, Heroku, or another hosting platform. Remember to set up your production database and migrate your data.

Future Functions:

Allow users to add new AEDs: Create a form in your frontend to add new AEDs, and an endpoint in your backend to receive and store this data.

User authentication and authorization (Optional): If you want to restrict access or editing rights to certain users, you could implement a system for user registration and login. Django has built-in tools to help with this.

Create project plan: breakdown structure, timeline, buffers, etc. 







-->
