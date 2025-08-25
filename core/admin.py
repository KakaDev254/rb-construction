from django.contrib import admin
from .models import Service, Project, TeamMember, ContactMessage, Customer

admin.site.register(Service)
admin.site.register(Project)
admin.site.register(TeamMember)
admin.site.register(Customer)
admin.site.register(ContactMessage)