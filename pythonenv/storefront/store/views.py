from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .permissions import IsAdminOrReadOnly, ViewCustomerHistoryPermission
from .models import Product, Collection, Cart, CartItem, Customer
from .serializers import ProductSerializer, CollectionSerializer, CartSerializer, CartItemSerializer, AddCartItemSerializer, UpdateCartItemSerializer, CustomerSerializer
from django.db.models import Count

class CollectionViewSet(ModelViewSet):
  queryset = Collection.objects.annotate(products_count=Count('products')).all()
  serializer_class = CollectionSerializer
  permission_classes = [IsAdminOrReadOnly]
  
class ProductViewSet(ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  permission_classes = [IsAdminOrReadOnly]
  
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


class CustomerViewSet(ModelViewSet):
  queryset = Customer.objects.all()
  serializer_class = CustomerSerializer
  permission_classes = [IsAdminUser]

  @action(detail=True, permission_classes=[ViewCustomerHistoryPermission])
  def history(self, request, pk):
    return Response('ok')

  @action(detail=False, methods=['GET', 'PUT'], permission_classes=[IsAuthenticated])
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

