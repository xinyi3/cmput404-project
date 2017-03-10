from rest_framework import viewsets
from server.quickstart.serializers import AuthorSerializer, PostSerializer, CommentSerializer, FollowingRelationshipSerializer
from server.quickstart.models import Post, Comment, FollowingRelationship, Author


class AuthorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Authors to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Posts to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Comments to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class FollowingRelationshipViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows FollowingRelationships to be viewed or edited.
    """
    queryset = FollowingRelationship.objects.all()
    serializer_class = FollowingRelationshipSerializer
