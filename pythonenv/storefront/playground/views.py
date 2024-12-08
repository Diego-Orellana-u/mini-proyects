from django.shortcuts import render
from store.models import Product
from store.models import Customer
from store.models import Collection
from store.models import Order
from store.models import OrderItem
from django.db.models import Q, F
from django.core.exceptions import ObjectDoesNotExist

def say_hello(request):
    # OrderItems = OrderItem.objects.values('product__title').distinct().order_by('product__title')

    # queryset = Product.objects.filter(id__in=OrderItem.objects.values('product_id')).distinct().order_by('title')
    
    # OrderItems = Product.objects.filter(orderitem__isnull=False).distinct().order_by('title')

    OrderItems = Product.objects.only('id', 'title', 'unit_price')


    return render(request, 'hello.html', {'name': 'Mosh', 'products': OrderItems,  })


# customers = Customer.objects.filter(email__contains=".com")
# collections = Collection.objects.filter(featured_product_id__isnull=True)
# products_lowInventory = Product.objects.filter(inventory__lt=10)
# orderIdOne = Order.objects.filter(customer_id = 1)
# productsCollectionThree = Product.objects.filter(collection_id = 3).order_by("last_update")
# customers, "collections": collections, "lowInventory": products_lowInventory, "orderIdOne": orderIdOne, "productsCollectionThree": productsCollectionThree



    # OrderItems = Product.objects.filter(orderitem__product_id=F('id')).order_by('title')