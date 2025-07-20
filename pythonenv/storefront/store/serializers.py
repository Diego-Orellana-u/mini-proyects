from decimal import Decimal
from rest_framework import serializers
from .models import Product, Cart, CartItem
from .models import Collection
from django.db.models import  F

class CollectionSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Collection
    fields = ['id', 'title', 'products_count']

  products_count = serializers.IntegerField()

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'title', 'unit_price', 'inventory', 'description', 'slug', 'collection', 'price_with_tax']

  # We use the serializermethodfield method to calculate a new field
  price_with_tax = serializers.SerializerMethodField(method_name='calculate_tax')

  def calculate_tax(self, product):
    return product.unit_price * Decimal(1.1)
  

class CartItemSerializer(serializers.ModelSerializer):

  total_price = serializers.SerializerMethodField(method_name='calculate_total_price')

  def calculate_total_price(self, cartItem):
    return cartItem.product.unit_price * cartItem.quantity
  
  class Meta:
    model = CartItem
    fields = ['id', 'cart', 'product', 'quantity', 'total_price']
  

class CartSerializer(serializers.ModelSerializer):
  id = serializers.UUIDField(read_only=True)

  items = CartItemSerializer(many=True)
  class Meta:
    model = Cart
    fields = ['id', 'items']
