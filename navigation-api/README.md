# NAVIGATION-API

## Prerequisites:

Before you begin, ensure you have installed the latest version of:

npm, PostgreSQL, Node

## INTALATION:

//Install all dependencies:
### npm install

//Important: before running this, be sure your PostgreSQL Server is running on your mashine

//Create local db:
### psql -f navigation.sql


## API Reference:
example: http://localhost:3000/api/navigation/:id

This web servise provides folowing endpoints:

//To get links using navigation id
get('/api/navigation/:id', db.getNavigationLinks);

//To create link using navigation id
post('/api/links', db.createLink);

//To create navigation instance if needed
post('/api/navigation', db.createNavigation);

//Update link using link id
put('/api/links/:id', db.updateLink);

//Update link position in navigation using navigation id
put('/api/navigation/:id', db.updateLinks);

//Delete link using link id
delete('/api/links/:id', db.removeLink);

## Importan: If you are going to run Client and Server applications in the same mashine,you should run first the server application.

Runs the app in the development mode.<br />

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



//Import db_file into your postgresql

//Create db using terminal

Download the db_file

Using terminal run psql using following:

$ psql

When you in psql run following:

$ create database db_name

Using terminal go to database file directory and run the following:

$ psql created_db_name < db_file_name.sql
