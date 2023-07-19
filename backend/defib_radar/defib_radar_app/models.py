from django.db import models
from django.contrib.gis.db import models

# Create your models here.


class Defibrillator(models.Model):
    title = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    coordinates = models.PointField()
    availability = models.BooleanField(default=False)
    # access_type public = true, non-public = false
    access_type = models.BooleanField(default=False)
    # blank means 24/7, null means 0/0 or unknown
    #     access_times=json.dumps({
    #     'monday': {'open': '09:00', 'close': '17:00'},
    #     'tuesday': {'open': '09:30', 'close': '18:00'},
    #     # ... and so on for other days
    #     })
    access_times = models.JSONField(blank=True, null=True)

    def _str_(self):
        return self.title
