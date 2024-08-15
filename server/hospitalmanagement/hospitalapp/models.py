from django.db import models

# Create your models here.

class Hospital(models.Model):
    name = models.CharField(max_length=100)
    place = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    doctor = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)


