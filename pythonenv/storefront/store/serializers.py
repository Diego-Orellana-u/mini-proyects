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
  
class SimpleProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'title', 'unit_price']

class CartItemSerializer(serializers.ModelSerializer):
  product = SimpleProductSerializer()
  total_price = serializers.SerializerMethodField(method_name='get_total_price')

  def get_total_price(self, product):
    return product.quantity * product.product.unit_price

  class Meta:
    model = CartItem
    fields = ['id', 'quantity', 'product', 'total_price']

class CartSerializer(serializers.ModelSerializer):
  items = CartItemSerializer(many=True)
  total_price = serializers.SerializerMethodField(method_name='get_total_price')

  # Anotar esto que no pude hacerlo
  def get_total_price(self, cart):
    return sum([item.quantity * item.product.unit_price for item in cart.items.all()])
  
  class Meta:
    model = Cart
    fields = ['id', 'items', 'total_price']

class AddCartItemSerializer(serializers.ModelSerializer):
  product_id = serializers.IntegerField()

  class Meta:
    model = CartItem
    fields = ['id', 'product_id', 'quantity']