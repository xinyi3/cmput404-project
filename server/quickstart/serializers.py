from django.contrib.auth.models import User
from rest_framework import serializers
from models import Post, Comment, FollowingRelationship


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'text', 'author')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('text', 'post')

class FollowingRelationshipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FollowingRelationship
        fields = ('userAis', 'followingUserB')
