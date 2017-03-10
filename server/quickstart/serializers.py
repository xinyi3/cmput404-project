from rest_framework import serializers
from models import Post, Comment, FollowingRelationship, Author


class FollowingRelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = FollowingRelationship
        fields = ('user', 'follows')

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'displayName')

# When we read we get the nested data, but we only have to passed the author_id when we write
class CommentSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    # Written by http://stackoverflow.com/a/33048798 joslarson (http://stackoverflow.com/users/3097518/joslarson)
    # on StackOverflow, modified by Kyle Carlstrom (CC-BY-SA 3.0)
    author_id = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all(), source='author', write_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'comment', 'author', 'author_id')

# When we read we get the nested data, but we only have to passed the author_id when we write
class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    author = AuthorSerializer(read_only=True)
    # Written by http://stackoverflow.com/a/33048798 joslarson (http://stackoverflow.com/users/3097518/joslarson)
    # on StackOverflow, modified by Kyle Carlstrom (CC-BY-SA 3.0)
    author_id = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all(), source='author', write_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'description', 'contentType', 'author', 'comments', 'author_id')
