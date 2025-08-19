from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import serializers

class UserCreateSerializer(BaseUserCreateSerializer):
  birth_date = serializers.DateField()
  
  class Meta(BaseUserCreateSerializer.Meta):
    fields = ["id", "email", "username", "password", "first_name", "last_name", 'birth_date']

class UserSerializer(BaseUserSerializer):
  class Meta(BaseUserSerializer.Meta):
    fields = ['email', 'id', 'username', 'first_name', 'last_name']