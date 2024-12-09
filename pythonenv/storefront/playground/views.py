from django.shortcuts import render
from store.models import Product
from store.models import Customer
from store.models import Collection
from store.models import Order
from store.models import OrderItem
from django.db.models import Q, F
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.aggregates import Count, Max, Min, Avg, Sum

from django.db.models.functions import Concat

from django.db.models import Value, Func, ExpressionWrapper, DecimalField

def say_hello(request):

    discounted_price = ExpressionWrapper(F('unit_price') * 0.8, output_field=DecimalField())

    annotate = Product.objects.annotate(discounted_price=discounted_price)


    return render(request, 'hello.html', {'name': 'Mosh', 'result': list(annotate), })