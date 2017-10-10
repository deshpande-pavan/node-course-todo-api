// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log("Connected to MOngo server");

    // db.collection('todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert Todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name:"Pavan",
    //     age:24,
    //     location:"Bengaluru"
    // },(err,result)=>{
    //     if (err){
    //         return console.log("Unable to insert User",err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});