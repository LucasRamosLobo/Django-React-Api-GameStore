sleep 10

# Inicia a aplicação Django
python populate_db.py
python manage.py runserver 0.0.0.0:8000
python manage.py migrate
python manage.py makemigrations &&
python manage.py migrate

