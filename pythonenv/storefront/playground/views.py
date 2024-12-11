from django.shortcuts import render
from store.models import Product
from tags.models import TaggedItem 

from django.contrib.contenttypes.models import ContentType

def say_hello(request):


    taggedProduct = TaggedItem.objects.get_tags_for(Product, 15)

    return render(request, 'hello.html', {'name': 'Mosh', 'tags': list(taggedProduct) })