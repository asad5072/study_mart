from django.urls import path, include
from . import views
urlpatterns =[
    path('api/', views.teacher_list, name='teacher_list'),
]