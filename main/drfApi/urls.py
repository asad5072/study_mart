from django.urls import path, include
from . import views

urlpatterns =[
    path('api/', views.teacher_list, name='teacher_list'),
    path('api/create', views.create_teacher, name='create_teacher'),
    path('api/teachers/<int:id>/', views.edit_teacher, name='edit_teacher'),
    
]