# NAVIGATION-API

This application was built using Node.js and PostgreSQL

## Prerequisites:

Before you begin, ensure you have installed the latest version of:

npm, PostgreSQL, Node

1) Install all dependencies in the navigation-api root folder terminal you should run:

### `npm install`

### Important: before running this, be sure your PostgreSQL Server is running on your mashine

2) Create local database:

### `psql -f navigation.sql`


### Importan: If you are going to run Client and Server applications in the same mashine,you should run first the server application.

3) Runs the app in the development mode.<br />

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## API Reference:
example: http://localhost:3000/api/navigation/:id

### This web servise provides folowing endpoints:

To get links using navigation id:

get('/api/navigation/:id');

To create link using navigation id:

post('/api/links');

To create navigation instance if needed:

post('/api/navigation');

Update link using link id:

put('/api/links/:id');

Update link position in navigation using navigation id:

put('/api/navigation/:id');

Delete link using link id:

delete('/api/links/:id');



