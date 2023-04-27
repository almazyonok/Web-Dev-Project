# Generated by Django 4.1.4 on 2023-04-20 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project_auth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('Teacher', 'Teacher'), ('Student', 'Student')], default='Student', max_length=200),
        ),
    ]
