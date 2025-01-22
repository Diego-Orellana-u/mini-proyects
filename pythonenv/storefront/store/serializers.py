from decimal import Decimal
from rest_framework import serializers
from .models import Product
from .models import Collection


class CollectionSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Collection
    fields = ['id', 'title']

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'title', 'unit_price', 'collection', 'price_with_tax']

  price_with_tax = serializers.SerializerMethodField(method_name='calculate_tax')

  def calculate_tax(self, product):
    return product.unit_price * Decimal(1.1)
  
