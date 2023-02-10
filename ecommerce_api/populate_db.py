import sys
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ecommerce_api.settings")
import django
django.setup()
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import json
from products.models import Product

# set up Django environment


# import your model

# load data from your JSON file
with open("products.json") as json_file:
    data = json.load(json_file)

# add data to the database
for item in data:
    product = Product(
        name=item["name"],
        price=item["price"],
        score=item["score"],
        image_url=item["image"]
    )
    product.save()