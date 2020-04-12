from rest_framework import serializers, viewsets
from .serializers import PostSerializer
from .models import Posts
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics
from elasticsearch import Elasticsearch

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
        post_dict = {}
        post_dict["title"] = self.request.POST["title"]
        post_dict["body"] = self.request.POST["body"]
        post_dict["title"] = self.request.POST["address"]
        post_dict["user"] = self.request.user.name
        post_dict["tags"] = self.request.POST["tags"]

        self.elasticsearch_index(post_dict)

    @staticmethod
    def elasticsearch_index(post_dict):
        try:
            es = Elasticsearch(HOST="http://localhost", PORT=9200)
            es.index(index="posts", doc_type="post", body=post_dict)
        except Exception as e:
            print(e)


class PostsView(generics.ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer


def search(request, query_string):
    print(query_string)
    return None
