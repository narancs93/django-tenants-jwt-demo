from django.contrib import admin
from django_tenants.admin import TenantAdminMixin

from users.models import Client, User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "email")


@admin.register(Client)
class ClientAdmin(TenantAdminMixin, admin.ModelAdmin):
    list_display = ("name", "created_on")
