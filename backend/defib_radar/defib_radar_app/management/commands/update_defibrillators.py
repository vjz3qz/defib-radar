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
        response = requests.get(os.environ.get("API_URL"))
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
