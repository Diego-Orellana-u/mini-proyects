from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.urls import include
from rest_framework_nested import routers

router = DefaultRouter()
router.register('cart', views.CartViewSet)
router.register('customers', views.CustomerViewSet)

# anotar esto que no pude hacerlo
carts_router = routers.NestedDefaultRouter(router, 'cart', lookup='cart')
carts_router.register('items', views.CartItemViewSet, basename='cart-items')

# URLConf
urlpatterns = [
    path('', include(router.urls)),
    path('', include(carts_router.urls)),
    path('products/', views.product_list),
    path('products/<int:pk>/', views.product_detail), 
    path('collections/', views.collection_list),
    path('collections/<int:pk>/', views.collection_detail, name="collection-detail") 
]

