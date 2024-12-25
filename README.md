Feedback API
Описание

API для управления обратной связью с поддержкой категорий, статусов, голосования и аутентификации пользователей.
Стэк технологий
Node.js / TypeScript / Express.js / Sequelize / PostgreSQL / JWT

Установка и настройка окружения
1. Установите зависимости:

Убедитесь, что на вашем компьютере установлены:

    Node.js версии >=16.0.0
    npm или yarn для управления пакетами.
    PostgreSQL версии >=12.0.

2. Клонируйте репозиторий:

git clone https://github.com/yourusername/feedback-api.git
cd feedback-api

3. Установите зависимости:

npm install

4. Настройте базу данных:

Создайте базу данных в PostgreSQL. Например:

CREATE DATABASE feedback_db;

5. Настройте переменные окружения:

Создайте файл .env в корне проекта, скопировав содержимое из .env.example:

cp .env.example .env

Замените значения переменных на ваши:

DB_NAME=your_db
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
PORT=3000

Запуск приложения
1. Запустите сервер разработки:

npm run dev

Сервер будет доступен по адресу: http://localhost:3000.
2. Запустите в продакшн-режиме:

npm run build
npm start

Доступные API-маршруты
Пользователи:

    POST /api/users/register — регистрация пользователя.
    POST /api/users/login — вход пользователя.

Отзывы:

    POST /api/feedbacks — создание отзыва (требуется авторизация).
    GET /api/feedbacks — получение списка отзывов.
    GET /api/feedbacks/:id — получение отзыва по ID.
    PUT /api/feedbacks/:id — обновление отзыва (требуется авторизация).
    DELETE /api/feedbacks/:id — удаление отзыва (требуется авторизация).

Голосование:

    POST /api/votes/upvote — голосование за отзыв (требуется авторизация).

Категории и Статусы:

    POST /api/categories — создание категории.
    GET /api/categories — получение всех категорий.
    POST /api/statuses — создание статуса.
    GET /api/statuses — получение всех статусов.
