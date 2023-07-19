# Generated by Django 4.2.3 on 2023-07-19 06:24

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Defibrillator",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("address", models.CharField(max_length=255)),
                (
                    "coordinates",
                    django.contrib.gis.db.models.fields.PointField(
                        null=True, srid=4326
                    ),
                ),
                ("availability", models.BooleanField(default=False)),
                ("access_type", models.BooleanField(default=False)),
                ("access_times", models.JSONField(blank=True, null=True)),
            ],
        ),
    ]