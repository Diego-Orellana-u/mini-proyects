from django.shortcuts import render
from store.models import Product
from tags.models import TaggedItem 

from django.contrib.contenttypes.models import ContentType

def say_hello(request):


    taggedProduct = Product.objects.all()
    list(taggedProduct)
    taggedProduct[0]

    return render(request, 'hello.html', {'name': 'Mosh', })