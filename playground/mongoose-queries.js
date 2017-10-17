const { ObjectId } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '59e5b29af5c6077c0347aa32';
// var test = 'Second test';

// if (!ObjectId.isValid(id)) {
//     return console.log('Id is invalid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);

// });

// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todo', todos);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => {
//     console.log(e);
// })
var id = '59de29515428d1402abe1dd4';
User.findById(id).then((users) => {
    if (!users) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(users, undefined, 2));
}, (e) => {
    console.log('Id is invalid', e);
});
