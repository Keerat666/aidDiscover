from abc import ABC

from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _


class UserSerializer(serializers.ModelSerializer):
    """ Serializers for accounts model """

    class Meta:
        model = get_user_model()
        fields = ("email", "name", "phone_number", "password", "image")
        extra_kwargs = {
            'password': {"write_only": True, 'min_length': 8}
        }

    def create(self, validated_data):
        """Create user and returning it"""
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update a user and return it"""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(raw_password=password)
            user.save()

        return user


class AuthTokenSerializer(serializers.Serializer):
    """Serializer for user authentication"""
    email = serializers.EmailField()
    password = serializers.CharField(
        style={"input_type": "password"},
        trim_whitespace=False
    )

    def validate(self, attrs):
        """Validate and authenticate the user"""
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password
        )

        if not user:
            msg = _("Unable to authenticate with provided credentials")
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs
