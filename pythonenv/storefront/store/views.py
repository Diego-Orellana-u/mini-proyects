from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count
from rest_framework import status
from .models import Product, Collection
from .serializers import ProductSerializer, CollectionSerializer



@api_view(['GET', 'POST'])
def collection_list(request):
  # We separate each method with a conditional

  if request.method == 'GET':
    # Annotate to create a new field with the product count
    queryset = Collection.objects.annotate(products_count=Count('products')).all()

    # Used queryset and many=true to iterate over all objects
    serializer = CollectionSerializer(queryset, many=True)
    return Response(serializer.data)
  
  elif request.method == 'POST':
    serializer = CollectionSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response('ok')
  
@api_view(['GET', 'PUT', 'DELETE'])
def collection_detail(request, pk):
  collection = get_object_or_404(Collection.objects.annotate(products_count=Count('products')), pk=pk)
  if request.method == 'GET':
    serializer = CollectionSerializer(collection)
    return Response(serializer.data)
  
  elif request.method == 'PUT':
    serializer = CollectionSerializer(collection, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  
  elif request.method == 'DELETE':
    # Adding a conditional to prevent deleting an associated object
    if collection.products.count() > 0:
        return Response({'error': 'Product can not be deleted because it is associated with an order item.'} ,status=status.HTTP_405_METHOD_NOT_ALLOWED)
    collection.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
def product_list(request):
  if request.method == 'GET':
    queryset = Product.objects.select_related('collection').all()
    serializer = ProductSerializer(queryset, many=True, context={'request': request})
    return Response(serializer.data)
  
  elif request.method == 'POST':
    serializer = ProductSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response('ok')
  
@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    if request.method == 'GET':
      serializer = ProductSerializer(product)
      return Response(serializer.data)
    
    elif request.method == 'PUT':
      serializer = ProductSerializer(product, data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    elif request.method == "DELETE":
      if product.orderitem_set.count() > 0:
        return Response({'error': 'Product can not be deleted because it is associated with an order item.'} ,status=status.HTTP_405_METHOD_NOT_ALLOWED)
      product.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)

