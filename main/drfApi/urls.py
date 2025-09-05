from django.urls import path, include
from . import views
from .views import TeacherListView, StudentCreateView

urlpatterns =[
    path('api/', views.teacher_list, name='teacher_list'),
    path('api/create', views.create_teacher, name='create_teacher'),
    path('api/students/', views.student_list, name='student_list'),
    path('api/teachers/<int:id>/', views.edit_teacher, name='edit_teacher'),
    path('courses/', TeacherListView.as_view(), name='course_list'),
    path('register/', StudentCreateView.as_view(), name='student_register'),
    
]