from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DefibrillatorSerializer
from .models import Defibrillator
import requests

class DefibrillatorView(viewsets.ModelViewSet):
    serializer_class = DefibrillatorSerializer
    queryset = Defibrillator.objects.all()
