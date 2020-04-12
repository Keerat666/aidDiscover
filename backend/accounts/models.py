from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core import validators
# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, email, name, phone_number, password=None, **extra_fields):
        user = self.model(email=self.normalize_email(email), name=name, phone_number=phone_number, **extra_fields)
        user.set_password(raw_password=password)
        user.save()
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email=email, name=email, phone_number=1234567890)
        user.set_password(raw_password=password)
        user.is_staff = True
        user.is_superuser = True
        user.save()


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, null=False, blank=False, unique=True)
    name = models.CharField(max_length=255)
    phone_number = models.IntegerField()
    image = models.URLField(default="https://image.flaticon.com/icons/svg/476/476863.svg")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
