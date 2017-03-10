from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)

    def __unicode__(self):
        return self.name

class Post(models.Model):
    text = models.CharField(max_length=140)
    author = models.ForeignKey(User)

    def __unicode__(self):
        return self.text


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='comments')
    author = models.ForeignKey(User)
    text = models.CharField(max_length=140)

    def __unicode__(self):
        return self.text

class FollowingRelationship(models.Model):
    userAis = models.ForeignKey(User, related_name='userAis')
    followingUserB = models.ForeignKey(User, related_name='followingUserB')

