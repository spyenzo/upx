from rest_framework import serializers
from energy import models

class EnergySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Energy
        fields = ('id', 'power', 'is_valid', 'created_at', 'updated_at')
        read_only_fields = ('id', 'updated_at', 'created_at')