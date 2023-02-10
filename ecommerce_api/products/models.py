from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    score = models.FloatField()
    image_url = models.URLField()