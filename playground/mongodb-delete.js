// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log("Connected to Mongodb server");

    // //deleteMany
    // db.collection('Todos').deleteMany({ text: "Eat Lunch" }).then((result) => {
    //     console.log(result);
    // });

    // //deleteOne
    // db.collection('Todos').deleteOne({ text: "Walk the Dog" }).then((result) => {
    //     console.log(result);
    // });

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result.value.completed);
    // });

    db.collection('Users').findOneAndDelete({ 
        _id: new ObjectId('59dcd408ac7e2006d43c1bea')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});