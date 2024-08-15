from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Hospital
from .serializer import HospitalSerializer

# Create your views here.

class HospitalView(ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer
