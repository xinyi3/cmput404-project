from rest_framework import serializers
from models import Post, Comment, FollowingRelationship, User


class FollowingRelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = FollowingRelationship
        fields = ('userAis', 'followingUserB')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'author', 'post')

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    author = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'text', 'author', 'comments')

