var express = require('express');
var router = express.Router();

var db = require('../queries');


//To get links using navigation id
router.get('/api/navigation/:id', db.getNavigationLinks);

//To create link using navigation id
router.post('/api/links', db.createLink);
//To create navigation instance if needed
router.post('/api/navigation', db.createNavigation);
//Update link using link id
router.put('/api/links/:id', db.updateLink);
//Update link position in navigation using navigation id
router.put('/api/navigation/:id', db.updateLinks);
//Delete link using link id
router.delete('/api/links/:id', db.removeLink);

module.exports = router;