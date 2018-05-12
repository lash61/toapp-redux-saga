const R = require('ramda');
const todoList = require('./todoList');

const getTodoList = () => {
    return todoList;
};

const getTodoById = (todoId) => {
    return R.find(R.propEq('id', todoId))(todoList)
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
    const todoItem = R.find(R.propEq('id', todoId))(todoList);
    todoItem.status = getNextStatus(todoItem.status);
    return todoList;
};

const service = {
    getTodoById,
    getTodoList,
    switchStatusForTodo
};

module.exports = service;
