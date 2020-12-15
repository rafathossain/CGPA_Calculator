from django.urls import path
from .views import *

urlpatterns = [
	path('', index, name='home'),
	path('bn/', bangla, name='bangla'),
	path('en/', english, name='english'),
]
