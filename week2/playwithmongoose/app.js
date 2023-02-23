const db = require('./database/setup'); // Do not edit/remove this line


// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
    const newTodo = new db({
        name : name ,
        priority : priority ,
        done: false,
    })

    newTodo.save().then(() => {

        db.findOne({name: name}).then(data => {
            console.log(data)
        })
    })
};


createTodo('drink tea', 3);

// Complete one todo by name (update property done = true)
function completeTodo(name) {
 db.updateOne({name: name},{done: true }).then(() => {
    db.findOne({name: name}).then(data => {
        console.log('test,', data);
    })
})
};


completeTodo('Pay taxes')

// Delete one todo by name
function deleteTodo(name) {

    db.deleteOne({ name: name }).then(() => {

        db.find().then(data => {
        console.log(data);
        });
       
       })};
//deleteTodo('Pay Taxes');

module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line*/
