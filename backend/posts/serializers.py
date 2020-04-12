from rest_framework import serializers
from .models import Posts


class PostSerializer(serializers.ModelSerializer):
    """ Serializer for Posts """
    class Meta:
        model = Posts
        fields = ("id", "title", "body", "address", "tags", "last_modified")
        read_only_fields = ("id", )
