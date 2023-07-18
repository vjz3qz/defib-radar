from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Defibrillator(models.Model):
    title = models.CharField(max_length=120)
    address = models.TextField()
    coordinates = ArrayField(models.FloatField(), size=2)
    available = models.BooleanField(default=False)
    # access_type public = true, non-public = false
    access_type = models.BooleanField(default=False)
    access_times = models.TextField()

    def _str_(self):
        return self.title
