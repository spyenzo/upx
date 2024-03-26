from django.db import models

class Energy(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    power = models.DecimalField(max_digits=20, decimal_places=3)
    is_valid = models.BooleanField(default=False)