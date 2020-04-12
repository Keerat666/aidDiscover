from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('posts', views.UserPostView)

urlpatterns = [
    path("", include(router.urls)),
    path("all/", views.PostsView.as_view(), name="all_posts")
]
