from django.db import models

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=100)
    course_name = models.CharField(max_length=100)
    course_duration = models.IntegerField()
    seat = models.IntegerField()
    
    def __str__(self):
        return f"{self.name} - {self.course_name}"
    
    def available_seats(self):
        enrolled = self.student_set.count()
        return self.seat - enrolled
    
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    course = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    def __str__(self):
        return f"{self.name} - {self.course.course_name}"