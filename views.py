# social_media_platform/views.py

from django.shortcuts import render
from .models import Post, Comment, Like

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = Post.objects.get(pk=pk)
    return render(request, 'post_detail.html', {'post': post})

# Add views for comments, likes, follows, etc.
