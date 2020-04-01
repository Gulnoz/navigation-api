# NAVIGATION APPLICATION

Lets start with navigation application

## Prerequisites:

Before you begin, ensure you have installed the latest version of:

npm, PostgreSQL, Node

## INTALATION:

## Clone the repo and open project's root folder 

## Install all dependencies the root folder terminal you should run in :

### npm install

## Important: before running this, be sure your PostgreSQL Server is running on your mashine

## Create local database:

### psql -f navigation.sql


## Install server aplication [Navigation-API](https://github.com/Gulnoz/navigation-api/tree/master/navigation-api)

## Install client aplication [Navigation-UI](https://github.com/Gulnoz/navigation-api/tree/master/navigation-client)


Just incase if you have external database file and you need to import it:

### Instraction to import external database into your PostgreSQL server:

//Create db using terminal

1) Download the db_file

2) Using terminal run:

$ psql

3) When you in psql terminal run:

$ create database db_name

4) Using terminal go to database file directory and run the following:

$ psql created_db_name < db_file_name.sql
