# Generated by Django 4.2.5 on 2023-10-10 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0004_alter_orderitem_price"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="shippingPrice",
            field=models.DecimalField(
                blank=True, decimal_places=2, max_digits=20, null=True
            ),
        ),
        migrations.AlterField(
            model_name="order",
            name="taxPrice",
            field=models.DecimalField(
                blank=True, decimal_places=2, max_digits=20, null=True
            ),
        ),
    ]
