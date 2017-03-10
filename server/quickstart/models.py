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
    # Written by http://stackoverflow.com/a/13496120 user1839132 (http://stackoverflow.com/users/1839132/user1839132),
    # modified by Kyle Carlstrom
    user = models.ForeignKey(User)
    follows = models.ForeignKey(User, related_name='follows')

    def __unicode__(self):
        return str(self.user) + 'follows' + str(self.follows)

