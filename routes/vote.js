var express = require('express');
var router = express.Router();
var Vote = require("../database/vote");


/* GET home page. */

router.route('/')
    .get(function (req, res, next) {
        Vote.find(function (err, data) {
            res.render('votes', {title: 'Vote', data: data});
        });
    })
    .post(function (req, res) {
        var model = req.body;
        Vote.find({name: model.name}, function (err, data) {
            if (data.length === 0) {
                var vote = new Vote({
                    name: model.name,
                    vote: parseInt(model.vote)
                });
                vote.save(function (err, data) {
                    if (err) {
                        console.log('votes.ejs fail');
                    } else {
                        res.status(201).json(vote);
                    }
                })
            } else {
                Vote.update({_id: data[0]._id}, {vote: data[0].vote + parseInt(model.vote)}, function (err, data) {
                    if (err) {
                        console.log('votes.ejs fail:' + err);
                    } else {
                        res.status(201).json(vote);
                    }
                })
            }
        })
    });

module.exports = router;
