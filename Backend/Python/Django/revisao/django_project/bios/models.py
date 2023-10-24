from django.db import models


# Create your models here.
class Bio(models.Model):
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=50)
    publish_date = models.DateField(null=True)

    mus = models.OneToOneField("musicians.Musician", on_delete=models.CASCADE)
