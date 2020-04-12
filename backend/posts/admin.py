from django.contrib import admin
from .models import Posts
# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'last_modified')


admin.site.register(Posts, PostAdmin)
