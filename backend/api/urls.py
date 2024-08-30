from categories_shared.views import CategoryMV
from clothes_tenant.views import ItemsMV
from django.urls import include, path
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r"categories", CategoryMV)
router.register(r"clothes", ItemsMV)


urlpatterns = [
    path("", include(router.urls)),
]
