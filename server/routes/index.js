const express = require('express');
const Post = require('../models/post'); 
const app = express();

app.post('/new-post',(req,res)=>{

    let post = new Post();
    
    post.title = req.body.title;
    post.description = req.body.description;
    
    post.save((err,newPost)=>{

        if (err) return res.status(500).send({
            message: 'Error to save the new post'

        });

        if(!newPost) return res.status(404).send({
            message: 'Error to save the new Post'
        });

        return res.status(200).send({post: newPost});
    });

});

app.get('/posts',(req,res)=>{

    Post.find({}).exec((err,Posts)=>{

        if (err) return res.status(500).send({
            message: 'Error to get posts'
        });

        if(!Posts) return res.status(404).send({
            message: 'Error to get posts'
        });

        return res.status(200).send({posts: Posts});
    });
});

module.exports = app;