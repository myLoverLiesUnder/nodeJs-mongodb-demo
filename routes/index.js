var express = require('express');
var router = express.Router();
var Vote = require("../database/vote");

/* GET home page. */
router.get('/', function (req, res, next) {
    Vote.find(function (err, data) {
        res.render('index', {title: 'Vote Web', data: data});
    })
});

module.exports = router;