'use strict';

var express = require('express');
var multer = require('multer');
var upload = multer({ dest: '../tmp'});
var buildJSON = require('../helpers/buildJSON');

var router = express.Router();

router.get('/', indexController);
router.post('/filemetadata', upload.single('files'), metadataController);

function indexController(req, res) {
    res.render('index');
}

function metadataController(req, res) {
    console.log(req.file);
    var json = buildJSON(req.file, req.query.fields);
    res.json(json);
    
}

module.exports = router;