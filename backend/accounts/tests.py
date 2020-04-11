from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):

    def test_create_user_with_email_successful(self):
        """Test creating a new user with an email is successful"""
        email = 'test@londonappdev.com'
        password = 'Password123'
        name = 'ramukaka',
        phone_number = 7418529630
        user = get_user_model().objects.create_user(
            email=email,
            password=password,
            name=name,
            phone_number=phone_number
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))
        self.assertTrue(user.name, name)
        self.assertTrue(user.phone_number, phone_number)
