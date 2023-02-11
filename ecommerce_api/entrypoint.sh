sleep 5

# Inicia a aplicação Django
python manage.py makemigrations
python manage.py migrate
python populate_db.py
python manage.py runserver 0.0.0.0:8000


