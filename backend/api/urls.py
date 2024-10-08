from categories_shared.views import CategoryMV
from clothes_tenant.views import ItemsMV
from django.urls import include, path
from rest_framework import routers
from users.views import CustomTokenObtainPairView, CustomTokenRefreshView

router = routers.SimpleRouter()
router.register(r"categories", CategoryMV)
router.register(r"clothes", ItemsMV)


urlpatterns = [
    path("", include(router.urls)),
    path("token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", CustomTokenRefreshView.as_view(), name="token_refresh"),
]
