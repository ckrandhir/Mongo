/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-22 11:29:19 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-26 15:01:29
 */
var { mongoose } = require('./db/mongoose');
var { todo } = require('./model/todo');
var { user } = require('./model/user');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
var _ = require('lodash');

//EXPRESS
var app = express();

//MIDDLEWARE
app.use(bodyParser.json());

//POST todos

app.post('/todo', (req, res) => {
    var doc = new todo({
        text: req.body.name,
        complete: req.body.complete,
    });
    doc.save().then((doc) => {
        res.send(doc);

    }, (e) => {

        console.log(e);
    });
});

// GET all todos

app.get('/todo', (req, res) => {
    todo.find().then((doc) => {
        res.send(doc);
    }).catch(() => {
        console.log("Error ocuur during saving");
    });
});


//Get /todos

app.get('/todo/:todoId', (req, res) => {

    //res.send(req.params);
    //validate Id

    if (ObjectID.isValid(req.params.todoId)) {
        console.log('Valid');
        //find
        todo.findById(req.params.todoId).then((doc) => {
            res.send(doc);
            console.log(doc);

        }).catch((e) => {
            console.log(e);

        })



    } else {

        console.log('Invalid');



    }

});


// app.post('/users').post((req, rep) => {
//     var body = _.pick(req.body, ['email', 'password']);

//     var user = new user(body);

// });

//Listener
app.listen(3000, () => {
    console.log('stared at port 3000');
});