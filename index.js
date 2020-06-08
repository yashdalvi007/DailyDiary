const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Posts = require('./models/post');

const url = 'mongodb://localhost:27017/post';
const connect = mongoose.connect(url);

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('views'));

app.set('view engine', 'ejs');

var post1 = [];

app.post('/', (req,res)=>{
    var newPost = Posts({ 'title' : req.body.title, 'story' : req.body.story });
    post1.push(newPost);
    connect.then((db)=>{
        console.log('connected successfully to the server');
        newPost.save().then((Post)=>{
            console.log(Post);
        }).then(()=>{
            return mongoose.connection.close();});    
    });
    res.redirect('/');
});

app.get('/post/:postName', (req,res)=>{
    for (i=0; i< post1.length; i++){
        if (post[i].title === req.params.postName ){
            console.log(post1[i].title);
            res.render('post', {title: post1[i].title, story: post1[i].story});
            break;

        }
    }
});

app.get('/', (req, res)=>{
    res.render('home', {post:post1});
});


app.listen(3000, (req, res)=>{
    console.log('Server running on port 3000')
});

