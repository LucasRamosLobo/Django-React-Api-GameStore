from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, UserProfileView
from .views import LoginAPI, RegisterAPI



router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('user_profile/', UserProfileView.as_view(), name='user_profile'),
]