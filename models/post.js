const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    title:{
        type: String,
        required : true,
        unique: false
    },
    story:{
        type: String,
        required: true,
        unique: false
    }
},
{
    timestamps: true
});

var posts = mongoose.model('post', post);

module.exports = posts;
