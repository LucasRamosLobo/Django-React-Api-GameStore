from django.db import models
from django.contrib.auth.models import Permission, Group, User
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    groups = models.ManyToManyField(Group, related_name='custom_user_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_permissions')

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    score = models.FloatField()
    image_url = models.URLField()