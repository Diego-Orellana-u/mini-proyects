from django.shortcuts import render
from store.models import Product, Collection, Order, OrderItem
from tags.models import TaggedItem
from django.db import transaction

from django.db import connection

from django.contrib.contenttypes.models import ContentType


def say_hello(request):
    collection = Collection()
    collection.objects.filter(pk__gt=10).delete()

    return render(request, 'hello.html', {'name': 'Mosh', })