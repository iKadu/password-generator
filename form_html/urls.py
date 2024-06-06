from django.urls import path
from app_form_html import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('como-usar/', views.como_usar, name='como-usar'),
    path('gerador/', views.gerador, name='gerador'),
]
