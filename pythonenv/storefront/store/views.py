from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, DestroyModelMixin, UpdateModelMixin
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .permissions import IsAdminOrReadOnly
from django.db.models import Count
from rest_framework import status
from .models import Product, Collection, Cart, CartItem, Customer
from .serializers import ProductSerializer, CollectionSerializer, CartSerializer, CartItemSerializer, AddCartItemSerializer, UpdateCartItemSerializer, CustomerSerializer


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



# @api_view(['GET', 'POST'])
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
  
class ProductViewSet(ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  
  def get_serializer_context(self):
    return {'request': self.request}

class CartViewSet(CreateModelMixin, RetrieveModelMixin, DestroyModelMixin, GenericViewSet):
  queryset = Cart.objects.prefetch_related('items__product').all()
  serializer_class = CartSerializer


class CartItemViewSet(ModelViewSet):
  http_method_names = ['get', 'post', 'patch', 'delete']
  
  def get_serializer_class(self):
    if self.request.method == 'POST':
      return AddCartItemSerializer
    elif self.request.method == 'PATCH':
      return UpdateCartItemSerializer
    return CartItemSerializer
  
  def get_serializer_context(self):
    return {"cart_id": self.kwargs["cart_pk"]}
  
  # Anotar esto que no pude hacerlo
  def get_queryset(self):
    return CartItem.objects.filter(cart_id=self.kwargs['cart_pk']).select_related('product')


class CustomerViewSet(RetrieveModelMixin, CreateModelMixin, UpdateModelMixin, GenericViewSet):
  queryset = Customer.objects.all()
  serializer_class = CustomerSerializer
  permission_classes = [IsAuthenticated]

  def get_permissions(self):
    if self.request.method == 'GET':
      return [AllowAny()]
    return [IsAuthenticated()]

  @action(detail=False, methods=['GET', 'PUT'], permission_classes=[])
  def me(self, request):
    (customer, created) = Customer.objects.get_or_create(user_id=request.user.id)
    if request.method == 'GET':
      serializer = CustomerSerializer(customer)
      return Response(serializer.data)
    else:
      serializer = CustomerSerializer(customer, data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.validated_data)

