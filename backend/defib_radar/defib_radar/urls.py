"""
URL configuration for defib_radar project.
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from defib_radar_app import views

router = routers.DefaultRouter()
router.register(r'defibrillators', views.DefibrillatorView, 'defibrillator')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/directions/', views.GoogleMapsDirections.as_view(), name='google-maps-directions'),
]