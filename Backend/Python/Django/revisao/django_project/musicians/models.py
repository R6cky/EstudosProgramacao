from django.db import models

# Create your models here.


class Musician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    instrument = models.CharField(max_length=30)


class Account(models.Model):
    name = models.CharField(max_length=30)
    birthdate = models.DateField()
    gender = models.CharField(max_length=20)
    email = models.CharField(max_length=60)
