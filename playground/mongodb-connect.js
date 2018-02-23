/*
 * @Author: Chandan Kumar 
 * @Date: 2018-02-19 11:11:38 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-02-22 11:14:05
 */
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;











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


//Finding data
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     //  var db = client.db('TodoApp');
//     var db = client.db('TodoApp');

//     if (err) {
//         console.log('Not connect ');

//     } else {
//         console.log('Connected successfully'); //testing

//         db.collection('Chandan').find({ complete: false }).toArray().then((result) => {

//             console.log(JSON.stringify(result, undefined, 2));


//         }, (err) => {
//             console.log('Unable to fetch data');


//         })

//         client.close();

//     }

// });


// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

//     var db = client.db('TodoApp');

//     if (err) {
//         console.log('Connection fail');

//     } else {
//         console.log('Connection successfully');
//         //deleteMAny

//         //Deleteone

//         //Findone and Delete



//         db.collection('Chandan').findOneAndDelete({ _id: new ObjectId('5a8b40dc32d87332c41da76b') }, (err, result) => {

//             if (err) {
//                 console.log(err);

//             } else {
//                 console.log(result);
//             }



//         });

//     }

// })


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    var db = client.db('TodoApp');

    if (err) {
        console.log('Connection fail');

    } else {
        console.log('Connection successfully');
        //deleteMAny

        //Deleteone

        //Findone and update



        db.collection('Chandan').findOneAndUpdate({ _id: new ObjectId('5a8ef6bcfdabf626004e1fdd') }, { $set: { complete: false } },
            (err, result) => {
                if (err) {
                    console.log(err);

                } else {
                    console.log(result);
                    console.log('Done successfully');

                }



            }
        );

    }

})