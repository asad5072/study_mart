from rest_framework import serializers
from drfApi.models import *  

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'