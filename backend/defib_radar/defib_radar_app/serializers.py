from rest_framework import serializers
from .models import Defibrillator

class DefibrillatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Defibrillator
        fields = ('name', 'address_line1', 'address_line2', 'city', 'state', 'zipcode', 'latitude', 'longitude', 'description')