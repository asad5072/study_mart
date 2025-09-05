from rest_framework import serializers
from drfApi.models import *  

class TeacherSerializer(serializers.ModelSerializer):
    available_seats = serializers.IntegerField( read_only=True)
    
    class Meta:
        model = Teacher
        fields = '__all__'
        
class StudentSerializer(serializers.ModelSerializer):
    course_name = serializers.CharField(source='course.course_name', read_only=True)

    class Meta:
        model = Student
        fields = '__all__'  # or list all fields + 'course_name'
        
    def validate_course(self, value):
        if value.available_seats() <= 0:
            raise serializers.ValidationError("No available seats in this course.")
        return value
