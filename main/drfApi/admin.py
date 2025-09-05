from django.contrib import admin
from .models import *

# Register your models here.
class TeacherAdmin(admin.ModelAdmin):
	list_display = ('name', 'course_name', 'course_duration', 'seat')

admin.site.register(Teacher, TeacherAdmin)

class StudentAdmin(admin.ModelAdmin):
	list_display = ('name', 'phone', 'email', 'course')
admin.site.register(Student, StudentAdmin)


