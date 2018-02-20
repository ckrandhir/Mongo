/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-19 11:11:38 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-20 10:41:11
 */
const MongoClient = require('mongodb').MongoClient;



// inset in monogo DB

// MongoClient.connect('mongodb://localhost:27017', (err, client) => {

//     var db = client.db('TodoApp');

//     if (err) {
//         console.log(err);

//         return console.log('unable to connect');
//     } else {
//         console.log('Connected to MongoDb');

//         db.collection('Chandan').insertOne({

//             text: 'Something to do 123',
//             complete: true
//         }, (err, result) => {
//             if (err) {
//                 return console.log('Unable insert');

//             } else {
//                 console.log(JSON.stringify(result.ops, undefined, 2));

//             }

//         })



//     }




// });


// Fetching data

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     //  var db = client.db('TodoApp');
//     var db = client.db('TodoApp');

//     if (err) {
//         console.log('Not connect ');

//     } else {
//         console.log('Connected successfully');

//         db.collection('TodoApp').find().toArray().then((result) => {

//             console.log(JSON.stringify(result, undefined, 2));


//         }, (err) => {
//             console.log('Unable to fetch data');


//         })

//         client.close();

//     }

// });



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    //  var db = client.db('TodoApp');
    var db = client.db('TodoApp');

    if (err) {
        console.log('Not connect ');

    } else {
        console.log('Connected successfully'); //testing

        db.collection('Chandan').find({ complete: false }).toArray().then((result) => {

            console.log(JSON.stringify(result, undefined, 2));


        }, (err) => {
            console.log('Unable to fetch data');


        })

        client.close();

    }

});