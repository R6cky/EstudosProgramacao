from django.shortcuts import render
from rest_framework.views import APIView, Response
from musicians.models import Musician
from .models import Account
from django.forms.models import model_to_dict
# Create your views here.


class MusicianView(APIView):   
    def post(self, req):
        req_data = req.data
        musicians = Musician.objects.create(
            first_name=req_data["first_name"],
            last_name=req_data["last_name"],
            instrument=req_data["instrument"],
        )
        return Response(model_to_dict(musicians), 201)

    def get(self, req):
        musician = Musician.objects.all()
        data_list = []
        for i in musician:
            data_list.append(model_to_dict(i))
        return Response(data_list, 200)


class AccountView(APIView):
    def post(self, req):
        account = Account.objects.create(**req.data)
        return Response(model_to_dict(account))

    def get(self, req):
        accounts = Account.objects.all()
        account_list = []
        for i in accounts:
            account_list.append(model_to_dict(i))
        return Response(account_list, 200)


class AccountUniqueView(APIView):
    def get(self, req, account_id):
        try:
            account = Account.objects.get(pk=account_id)
        except Account.DoesNotExist:
            return Response({"error": "Account does not exists"})
        return Response(model_to_dict(account), 200)

    def patch(self, req, account_id):
        try:
            account = Account.objects.get(pk=account_id)
        except Account.DoesNotExist:
            return Response({"error": "Account does not exists"})

        for key, value in req.data.items():
            setattr((account), key, value)
        account.save()
        return Response(model_to_dict(account), 204)

    def delete(self, req, account_id):
        try:
            account = Account.objects.get(pk=account_id)
        except Account.DoesNotExist:
            return Response({"error": "Does not exists"})
        account.delete()
        return Response(None, 204)
