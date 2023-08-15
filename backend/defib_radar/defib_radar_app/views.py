from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DefibrillatorSerializer
from .models import Defibrillator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
import os
from dotenv import load_dotenv

load_dotenv()

class DefibrillatorView(viewsets.ModelViewSet):
    serializer_class = DefibrillatorSerializer
    queryset = Defibrillator.objects.all()

class GoogleMapsDirections(APIView):
    def parse_response(self, response): # ADD LOGIC
        return response

    def get(self, request, *args, **kwargs):
        ROUTE_URL = os.environ.get('ROUTE_URL')
        GOOGLE_MAPS_API_KEY = os.environ.get('GOOGLE_MAPS_API_KEY')
        walking = request.query_params.get('walking')
        start_lat = request.query_params.get('startLat')
        start_lng = request.query_params.get('startLng')
        end_lat = request.query_params.get('endLat')
        end_lng = request.query_params.get('endLng')
        if not start_lat or not start_lng or not end_lat or not end_lng:
            return Response({"error": "Missing required location parameters."}, status=status.HTTP_400_BAD_REQUEST)
        url = f"{ROUTE_URL}?destination={end_lat},{end_lng}&mode={'walking' if walking else 'driving'}&origin={start_lat},{start_lng}&key={GOOGLE_MAPS_API_KEY}"
        try:
            response = requests.get(url)
            response.raise_for_status()
            parsed_data = parse_response(response.json())
            return Response(parsed_data, status=status.HTTP_200_OK)
        except requests.RequestException as e:
            return Response({"error": "There was an issue fetching data from Google Maps Directions API.", "detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)