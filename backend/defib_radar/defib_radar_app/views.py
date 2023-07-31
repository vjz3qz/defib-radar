from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DefibrillatorSerializer
from .models import Defibrillator
import requests

# Create your views here.

class DefibrillatorView(viewsets.ModelViewSet):
    serializer_class = DefibrillatorSerializer
    queryset = Defibrillator.objects.all()

# def get_defibs(request):
#     all_defibs = {}
#     if 'name' in request.GET:
#         name = request.GET['name']
#         url = 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/9/query?where=1%3D1&outFields=*&outSR=4326&f=json' % name
#         response = requests.get(url)
#         data = response.json()
#         defibs = data['defibs']

#         for i in defibs:
#             defib_data = Defibrillator(
#                 title = i['LOCATIONNAME'],
#                 address_line1 = i['ADDRESSLINE1'],
#                 coordinates = i['strInstructions'],
#                 availability = i['strArea'],
#                 access_type = i['idMeal'],
#                 access_times = i['strMealThumb']
#             )
#             defib_data.save()
#             all_meals = Meal.objects.all().order_by('-id')

#     return render (request, 'meals/meal.html', { "all_meals": 
#     all_meals} )