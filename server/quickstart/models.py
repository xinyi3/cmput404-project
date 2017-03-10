from __future__ import unicode_literals
from django.contrib.auth.models import User

from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=140)
    text = models.CharField(max_length=140)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

class Comment(models.Model):
    text = models.CharField(max_length=140)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class FollowingRelationship(models.Model):
    userAis = models.ForeignKey(User, related_name='userAis')
    followingUserB = models.ForeignKey(User, related_name='followingUserB')

