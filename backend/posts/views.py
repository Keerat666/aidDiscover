from rest_framework import serializers, viewsets
from .serializers import PostSerializer
from .models import Posts
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics
# Create your views here.


class UserPostView(viewsets.ModelViewSet):
    """Viewset for managing Post"""
    serializer_class = PostSerializer
    queryset = Posts.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        """Post for a specific user"""
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        """Creating a post"""
        serializer.save(user=self.request.user)


class PostsView(generics.ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
