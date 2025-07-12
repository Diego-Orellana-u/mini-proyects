from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.urls import include

router = DefaultRouter()
router.register('cart', views.CartViewSet)
router.register('cartitem', views.CartItemViewSet)

# URLConf
urlpatterns = [
    path('', include(router.urls)),
    path('products/', views.product_list),
    path('products/<int:pk>/', views.product_detail), 
    path('collections/', views.collection_list),
    path('collections/<int:pk>/', views.collection_detail, name="collection-detail") 
]

