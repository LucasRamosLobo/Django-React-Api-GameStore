from django.db import models
from django.contrib.auth.models import Permission, Group, User
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    price = models.FloatField()
    score = models.FloatField()
    image_url = models.URLField(unique=True)