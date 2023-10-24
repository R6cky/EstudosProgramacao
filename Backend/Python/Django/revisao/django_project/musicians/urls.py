from django.urls import path
from .views import MusicianView, AccountView, AccountUniqueView

urlpatterns = [
    path('musician/', MusicianView.as_view()),
    path('account/', AccountView.as_view()),
    path('account/<int:account_id>/', AccountUniqueView.as_view())
]
