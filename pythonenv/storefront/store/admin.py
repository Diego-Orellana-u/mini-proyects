from django.contrib import admin
from . import models
from django.db.models import Count
from django.utils.html import format_html, urlencode
from django.urls import reverse
# Register your models here.

class InventoryFilter(admin.SimpleListFilter):
  title = 'inventory'
  parameter_name = 'roberto'

  def lookups(self, request, model_admin):
    return [
      ('<10', 'Low')
    ]

  def queryset(self, request, queryset):
    if self.value() == '<10':
      return queryset.filter(inventory__lt=10)


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
  list_display = ['title', 'unit_price', 'inventory_status', 'collection_title']
  list_editable = ['unit_price']
  list_per_page = 10
  list_select_related = ['collection']
  list_filter = ['collection', 'last_update', InventoryFilter]

  def collection_title(self, product):
    return product.collection.title

  @admin.display(ordering='inventory')
  def inventory_status(self, product):
    if product.inventory < 10:
      return 'Low'
    return 'Ok'

@admin.register(models.Customer)
class CustomerAdmin(admin.ModelAdmin):
  list_display = ['first_name', 'last_name', 'membership', 'customer_orders']
  list_editable = ['membership']
  ordering = ['first_name', 'last_name']
  list_per_page = 10
  search_fields = ['first_name__istartswith', 'last_name__istartswith']

  
  @admin.display(ordering='customer_orders')
  def customer_orders(self, customer):
    url = (reverse('admin:store_order_changelist') 
          + '?' 
          + urlencode({
            'customer_id': str(customer.id)
          }))
    return format_html('<a href={}>{}</a>', url, customer.customer_orders)
  
  def get_queryset(self, request):
    return super().get_queryset(request).annotate(
      customer_orders=Count('order')
    )


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
  list_display = ['id', 'placed_at', 'payment_status', 'customer_name']
  ordering = ['placed_at']
  list_per_page = 10

  @admin.display(ordering='customer__first_name')
  def customer_name(self, order):
    return f'{order.customer.first_name} {order.customer.last_name}' 
  


@admin.register(models.Collection)
class CollectionAdmin(admin.ModelAdmin):
  list_display = ['title', 'products_count']

  @admin.display(ordering='products_count')
  def products_count(self, collection):
    url = (
      reverse('admin:store_product_changelist') 
      + '?'
      + urlencode({
          'collection__id': str(collection.id)
      }))
    return format_html('<a href={}>{}</a>', url, collection.products_count)
  

  def get_queryset(self, request):
    return super().get_queryset(request).annotate(
      products_count=Count('products')
    )
  

