# NAVIGATION APPLICATION

Lets start with navigation application

##Install server aplication [Navigation-API](https://github.com/Gulnoz/navigation-api/tree/master/navigation-api)

##Install client aplication [Navigation-UI](https://github.com/Gulnoz/navigation-api/tree/master/navigation-client)


Just incase if you have external database file and you need to import it:

###Instraction to import external database into your PostgreSQL server:

//Create db using terminal

1) Download the db_file

2) Using terminal run:

$ psql

3) When you in psql terminal run:

$ create database db_name

4) Using terminal go to database file directory and run the following:

$ psql created_db_name < db_file_name.sql
