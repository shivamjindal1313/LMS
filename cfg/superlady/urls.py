from django.contrib import admin
from django.urls import path

from superlady import views

urlpatterns = [
    path('',views.index,name="index"),
    path('register',views.register,name="register"),
    path('course',views.course,name="course"),
    path('notifs',views.notifs,name="notifs"),
    path('progress',views.progress,name="progress"),
]