from rest_framework import viewsets
from server.quickstart.serializers import UserSerializer, PostSerializer, CommentSerializer, FollowingRelationshipSerializer
from server.quickstart.models import Post, Comment, FollowingRelationship, User


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
