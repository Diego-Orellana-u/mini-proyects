from decimal import Decimal
from rest_framework import serializers
from .models import Product, Cart, CartItem
from .models import Collection


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
  
  
class CartSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cart
    fields = ['id','created_at']

class CartItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = CartItem
    fields = ['id', 'cart', 'product', 'quantity']