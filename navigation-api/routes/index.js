var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/navigation', db.getNavigation);
router.get('/api/navigation/:id', db.getNavigationLinks);
router.get('/api/links', db.getLinks);
router.get('/api/links/:id', db.getLink);
router.post('/api/links', db.createLink);
router.post('/api/navigation', db.createNavigation);
router.put('/api/links/:id', db.updateLink);
router.put('/api/navigation/:id', db.updateLinks);
router.delete('/api/links/:id', db.removeLink);


module.exports = router;