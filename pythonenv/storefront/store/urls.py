from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('products/', views.product_list),
    # Added type validations and dynamic data
    path('products/<int:pk>/', views.product_detail), 
    path('collections/', views.collection_list),
    path('collections/<int:pk>/', views.collection_detail, name="collection-detail") 
]

