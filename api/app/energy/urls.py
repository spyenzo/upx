from django.urls import (
    path,
    include,
)
from rest_framework.routers import DefaultRouter

from energy import views

router = DefaultRouter()
router.register('energy', views.EnergyViewSet)

app_name = 'energy'

urlpatterns = [
    path('', include(router.urls)),
]