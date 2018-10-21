var mongoose = require("mongoose");

var voteSchema = mongoose.Schema({
    name: {
        type: String
    },
    vote: {
        type: Number,
        default: 0
    }
});


var vote = mongoose.model('vote', voteSchema);

module.exports = vote;