# Generated by Django 4.2.5 on 2023-10-02 07:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="shippingaddress",
            old_name="postalCode",
            new_name="district",
        ),
    ]