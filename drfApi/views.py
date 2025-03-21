from django.shortcuts import render
from .serializers import TeacherSerializer
from .models import Teacher
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['GET'])
def teacher_list(request):
    if request.method == 'GET':
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

