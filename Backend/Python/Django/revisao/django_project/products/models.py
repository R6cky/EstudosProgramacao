from django.db import models

# Create your models here.
# product/models.py


class CategoryProduct(models.TextChoices):
    DRINK = "Drink"
    MEAT = "Meat"
    CANDY = "Candy"
    FRUIT = "Fruit"
    OTHER = "Other"


class Product(models.Model):
    name = models.CharField(max_length=20)
    category = models.CharField(
        max_length=30,
        choices=CategoryProduct.choices,
        default=CategoryProduct.OTHER
    )
    price = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
