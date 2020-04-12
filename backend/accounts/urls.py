from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.CreateUserView.as_view(), name="create"),
    path('token/', views.CreateTokenView.as_view(), name="token"),
    path('profile/', views.ManageUserView.as_view(), name='profile'),
]
