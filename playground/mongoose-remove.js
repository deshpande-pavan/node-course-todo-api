const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((res)=>{
//     console.log(res);
// });

// Todo.findOneAndRemove({_id:'59eeeda65025f14823f4a467'}).then((doc)=>{
//     console.log(doc);
// });
//
// Todo.findOneAndRemove({text:"Something to do"}).then((doc)=>{
//     console.log(doc);
// });

Todo.findByIdAndRemove('59eeecea5025f14823f4a43f').then((doc) => {
    console.log(doc);
});
