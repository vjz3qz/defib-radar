from django.db import models
from django.contrib.gis.db import models

# Create your models here.


class Defibrillator(models.Model):
    name = models.CharField(max_length=255)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, null=True, blank=True, default=None)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    description = models.TextField(null=True, blank=True)


    

    def _str_(self):
        return self.title
