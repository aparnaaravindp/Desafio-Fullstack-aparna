# Fullstack Project - Customer Register

## Introduction

The application can perform register users, login users, list all the users, update the user data and delete the user. It also perform register contacts, get contacts of logged in user, update contacts and delete contacts.

## About the project

In this project npm dependencies are used. It is in **TypeScript**. Datas are serialized using **zod** library. For the elaboration of API **postgres** database is used. **TypeORM** is used.


## Tables

This application has two tables. One is users and other is contacts. This tables have 1:N relations. One user can have multiple contacts.


## Endpoints

**Users**

POST - /users - Create users
- fullname - string,
- email - string,
- telephone - number,
- password - string

GET - /users - List users - Need authentication
PATCH - /users/:id - Update user - Need authentication
DELETE - /users/:id - Delete user - Need authentication


**Contacts**

POST - /contacts - Create contacts
- fullname - string,
- email - string,
- telephone - number,
- userId - number
GET - /contacts - List contacts - Need authentication
PATCH - /contacts/:id - Update contact - Need authentication and authorization
DELETE - /contacts/:id - Delete contact - Need authentication and authorization


## How to run the app

- First clone the project repository in your device
- Install all the dependencies using **npm install**
- For makeMigrations use this command **npm run typeorm migration:generate -- -d src/data-source src/migrations/createNameOfTheTable**
- For run migrations use this command **npm run typeorm migration:run -- -d src/data-source**
- Then **npm run dev**