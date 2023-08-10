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
Create an endpoint to serve AED data: Once your database is populated with AED data, you'll need to create endpoints in your Django app to serve this data to the frontend.

Set up Google Maps API in your frontend: You'll need to include the Google Maps JavaScript API in your frontend to display maps and routes.

Display AEDs on a map: Using data from your backend and the Google Maps API, display the locations of the AEDs on a map.

Create route to nearest AED: Implement functionality to find the nearest AED to a user's location and display a route on the map.



Test your application: Write tests for your Django views and your React components to make sure everything is working as expected.

Deploy your application: Once everything is working locally, you can deploy your application. You might choose to use AWS, Heroku, or another hosting platform. Remember to set up your production database and migrate your data.

Future Functions:

Allow users to add new AEDs: Create a form in your frontend to add new AEDs, and an endpoint in your backend to receive and store this data.

User authentication and authorization (Optional): If you want to restrict access or editing rights to certain users, you could implement a system for user registration and login. Django has built-in tools to help with this.

Create project plan: breakdown structure, timeline, buffers, etc. -->
