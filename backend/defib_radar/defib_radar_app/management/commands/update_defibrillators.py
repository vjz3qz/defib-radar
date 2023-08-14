import os
import requests
from django.core.management.base import BaseCommand
from django.db import transaction
from dotenv import load_dotenv

from defib_radar_app.models import Defibrillator

load_dotenv()

class Command(BaseCommand):
    help = 'Fetch and update defibrillators from the API'

    def handle(self, *args, **options):
        response = requests.get(os.environ.get('API_URL'))
        if not (200 <= response.status_code < 300):
            self.stderr.write(f'Failed to fetch data from the API. Status code: {response.status_code}')
            return
        data = response.json()

        with transaction.atomic():
            items = data['features']
            for item in items:
                item_attributes = item['attributes']
                item_geometry = item['geometry']
                # Creates new defibrillators or updates existing ones
                defibrillator, created = Defibrillator.objects.update_or_create(
                    id=item_attributes['OBJECTID'],
                    defaults={
                        'name': item_attributes['LOCATIONNAME'],
                        'address_line1': item_attributes['ADDRESSLINE1'],
                        'address_line2': item_attributes['ADDRESSLINE2'],
                        'city': item_attributes['CITY'],
                        'state': item_attributes['STATE'],
                        'zipcode': item_attributes['ZIPCODE'],
                        'latitude': item_geometry['y'],
                        'longitude': item_geometry['x'],
                        'description': item_attributes['PLACEMENTDETAILS'],
                    },
                )

            # Delete defibrillators not in the API response
            Defibrillator.objects.exclude(id__in=[item['attributes']['OBJECTID'] for item in items]).delete()