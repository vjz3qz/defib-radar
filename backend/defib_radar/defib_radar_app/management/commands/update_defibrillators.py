import requests
from django.core.management.base import BaseCommand
from django.db import transaction

from defib_radar_app.models import Defibrillator

class Command(BaseCommand):
    help = 'Update defibrillators from the public API'

    def handle(self, *args, **options):
        response = requests.get('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/9/query?where=1%3D1&outFields=*&outSR=4326&f=json')
        data = response.json()

        with transaction.atomic():
            for item in data:
                # Creates new defibrillators or updates existing ones
                defibrillator, created = Defibrillator.objects.update_or_create(
                    # name=item['name'],
                    # defaults={
                    #     'name': item['name'],
                    #     'is_available': item['is_available'],
                    #     # Add any additional fields here.
                    # },
                )

            # Delete defibrillators not in the API response
            #Defibrillator.objects.exclude(id__in=[item['id'] for item in data]).delete()
