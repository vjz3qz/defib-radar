from rest_framework import serializers
from .models import Defibrillator

class DefibrillatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Defibrillator
        fields = ('title', 'address', 'coordinates', 'availabilty', 'access_type', 'access_times')