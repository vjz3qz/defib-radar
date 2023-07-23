from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DefibrillatorSerializer
from .models import Defibrillator

# Create your views here.

class DefibrillatorView(viewsets.ModelViewSet):
    serializer_class = DefibrillatorSerializer
    queryset = Defibrillator.objects.all()