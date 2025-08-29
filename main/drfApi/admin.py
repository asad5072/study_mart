from django.contrib import admin
from .models import Teacher

# Register your models here.
class TeacherAdmin(admin.ModelAdmin):
	list_display = ('name', 'course_name', 'course_duration', 'seat')

admin.site.register(Teacher, TeacherAdmin)


