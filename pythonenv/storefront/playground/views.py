from django.shortcuts import render
from store.models import Product, Collection, Order, OrderItem
from tags.models import TaggedItem
from django.db import transaction

from django.contrib.contenttypes.models import ContentType


def say_hello(request):

    Product.objects.raw('SELECT * FROM store_product')

    return render(request, 'hello.html', {'name': 'Mosh', })