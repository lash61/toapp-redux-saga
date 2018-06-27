const R = require('ramda');
const db = require('./db');

const todoList = db.getCollection('todoList')

const getTodoList = () => {
    return todoList.data;
};

const getTodoById = (todoId) => {
    return todoList.findOne({id: todoId});
};

const getNextStatus = (todoStatus) => {
    if (todoStatus === 'PENDING') {
        return 'IN_PROGRESS';
    }
    if (todoStatus === 'IN_PROGRESS') {
        return 'COMPLETE';
    }
    if (todoStatus === 'COMPLETE') {
        return 'PENDING';
    }
};

const switchStatusForTodo = (todoId) => {
    todoList.findAndUpdate({id: todoId}, (todoItem) => {
        todoItem.status = getNextStatus(todoItem.status);
    });
    return todoList.data;
};

const service = {
    getTodoById,
    getTodoList,
    switchStatusForTodo
};

module.exports = service;
