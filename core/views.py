from django.shortcuts import render
from .models import Service, Project, TeamMember, Customer

def home(request):
    services = Service.objects.all()
    projects = Project.objects.all()
    team = TeamMember.objects.all()
    customers = Customer.objects.all()
    return render(request, "core/index.html", {
        "services": services,
        "projects": projects,
        "team": team,
        "customers": customers,
    })
