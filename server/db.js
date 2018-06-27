const todoListJson = require('./todoList');
const loki = require('lokijs');

const db = new loki('todoDB');

const todoList = db.addCollection('todoList', {indices: ['id']});
todoListJson.forEach((todoItem) => {
    todoList.insert(todoItem);
});

module.exports = db;