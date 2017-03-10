from rest_framework import serializers
from models import Post, Comment, FollowingRelationship, User


class FollowingRelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = FollowingRelationship
        fields = ('user', 'follows')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')

# When we read we get the nested data, but we only have to passed the author_id when we write
class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    # Written by http://stackoverflow.com/a/33048798 joslarson (http://stackoverflow.com/users/3097518/joslarson)
    # on StackOverflow, modified by Kyle Carlstrom (CC-BY-SA 3.0)
    author_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), source='author', write_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'author', 'post', 'author_id')

# When we read we get the nested data, but we only have to passed the author_id when we write
class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    author = UserSerializer(read_only=True)
    # Written by http://stackoverflow.com/a/33048798 joslarson (http://stackoverflow.com/users/3097518/joslarson)
    # on StackOverflow, modified by Kyle Carlstrom (CC-BY-SA 3.0)
    author_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), source='author', write_only=True)

    class Meta:
        model = Post
        fields = ('id', 'text', 'author', 'comments', 'author_id')
