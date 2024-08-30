from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Item
from .serializers import ItemSerializer


class ItemsMV(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]
