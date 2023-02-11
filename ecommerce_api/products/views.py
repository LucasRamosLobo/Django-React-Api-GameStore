from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics, status
from django.contrib.auth import authenticate
from .serializers import LoginSerializer, RegisterSerializer, UserSerializer
from rest_framework.response import Response
from .models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

class ProductPriceView(generics.ListAPIView):
    queryset = Product.objects.all().order_by('price')
    serializer_class = ProductSerializer

class ProductScoreView(generics.ListAPIView):
    queryset = Product.objects.all().order_by('-score')
    serializer_class = ProductSerializer

@permission_classes([IsAuthenticated])
class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class RegisterAPI(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": User.objects.get(id=user.id).username
        })


class LoginAPI(generics.CreateAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(username=serializer.data['username'], password=serializer.data['password'])
        if user is None:
            return Response({
                "message": "Usuário ou senha inválidos"
            }, status=status.HTTP_401_UNAUTHORIZED)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data
        })
        
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


