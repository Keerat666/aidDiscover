from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.


class Posts(models.Model):
    title = models.CharField(max_length=255, blank=False)
    body = models.TextField(max_length=2000, blank=False)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    address = models.TextField(max_length=500, blank=False)
    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    tags = models.CharField(max_length=255)
    location_coordinates = models.TextField()
    category = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    image = models.URLField(default="https://miro.medium.com/max/1091/1*1k8BXesUwmCYXv0tt5KcuQ.jpeg")
