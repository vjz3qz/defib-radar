# TODO
-[ ] Backend
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
    - [x] Parse data and store in postgres (Varun)
    - [x] endpoint that serves AED data to frontend, 
    - [x] test if working with front end display (Varun)
  - [ ] Google Maps API
    - [x] move google api key functionality to backend
    - [x] Parse response URL to get route coordinates (Sanya)
    - [ ] Pagination: only send closest 10 AEDs to frontend
    - [ ] set up caching
- [ ] Frontend
    - [x] Display Map in frontend
    - [x] support CRUD ops to backend: get list
    - [x] Display loading screen before data/current location gets rendered
    - [ ] use expo managed .env file to store backend url
    - [ ] Routing
      - [x] Fix real-time routing with current location (Varun)
      - [x] Develop url building logic to get Directions from backend in useRoute hook (Varun)
      - [x] Display directions directions.js (Sanya)
    - [x] Add recenter button (Varun)
    - [x] Add button to exit directions
    - [ ] Add button to get nearest aed upon click: open info card of that marker/aed (Sanya)
    - [ ] Styling
      - [x] Fix directions overflow
      - [x] fixed card and button positions
      - [ ] Try adding animation to recenter button, cards, directions, etc.
- [ ] Deployment
  - [ ] Enable API keys and test app
  - [ ] Deploy to AWS

- [ ] Future
  - [ ] script that regularly fetches and updates data: Cron Job
  - [ ] Set up production database
- [ ] Cleaning & Refactoring
  - [ ] Extract react components
  - [ ] Extract styles
  - [ ] Extract constants
  - [ ] Extract hooks
  - [ ] Extract utils
  - [ ] Make sure code modularization makes sense
  - [ ] Ensure code is DRY
  - [ ] Ensure code is readable
  - [ ] Document code
  - [ ] Format code (prettier)
  - [ ] Styling
  - [ ] Add transition get current location and polyline


<!-- 


enable views
public devices like fire extinguishers


BACKEND
PROBLEM: must periodically run update script to fetch new data from Open Data DC API and update database:(backend) bash-3.2$ python manage.py update_defibrillators

Cron Jobs (Linux servers):
If you deploy your backend on a Linux server, you can use cron to schedule the command to run at regular intervals. First, open the cron table for editing:

Copy code
crontab -e
Then, add a line specifying when you want the command to run. For example, to run it daily at midnight:

bash
Copy code
0 0 * * * /path/to/your/python /path/to/your/manage.py update_defibrillators
AWS Elastic Beanstalk:
If you're using AWS Elastic Beanstalk, you can use cron.yaml to specify recurring tasks.

Django Packages:
You can also use Django packages like django-crontab or celery to manage scheduled tasks directly within your Django app.

No matter what method you choose, ensure your environment variables (like API_URL) are correctly set in the production environment, especially if you're relying on .env files during local development.



Allow users to add new AEDs: Create a form in your frontend to add new AEDs, and an endpoint in your backend to receive and store this data.


-->
