from django.shortcuts import render
from rest_framework import (
    viewsets,
)
from energy import serializers, models

class EnergyViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EnergySerializer
    queryset = models.Energy.objects.all()