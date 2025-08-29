from django.db import models

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=100)
    course_name = models.CharField(max_length=100)
    course_duration = models.IntegerField()
    seat = models.IntegerField()
    # def __str__(self):
    #     return f"{self.name} - {self.course_name}"