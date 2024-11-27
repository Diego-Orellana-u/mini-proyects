from django.urls import path 
from . import views # the dot means that the file is in the current folder

urlpatterns = [
  path('hello/', views.say_hello) # we only pass the function reference
]