import {ActionType, createStandardAction} from 'typesafe-actions';

import {ITodo} from 'domains/todos/todosTypes';

const loadTodos = createStandardAction('todos/load')();
const loadTodosPending = createStandardAction('todos/load-pending')();
const loadTodosSuccess = createStandardAction('todos/load-success')<ITodo[]>();
const loadTodosError = createStandardAction('todos/load-error')();

const selectTodo = createStandardAction('todos/select-todo')<string>();

const updateTodoStatus = createStandardAction('todo/update-status')<string>();
const updateTodoStatusPending = createStandardAction('todo/update-status-pending')();
const updateTodoStatusSuccess = createStandardAction('todo/update-status-success')<ITodo[]>();
const updateTodoStatusError = createStandardAction('todo/update-status-error')();

export type TodosAction = ActionType<typeof loadTodos
    | typeof loadTodosPending
    | typeof loadTodosSuccess
    | typeof loadTodosError
    | typeof selectTodo
    | typeof updateTodoStatus
    | typeof updateTodoStatusPending
    | typeof updateTodoStatusSuccess
    | typeof updateTodoStatusError>;

export default {
    loadTodos,
    loadTodosError,
    loadTodosPending,
    loadTodosSuccess,
    selectTodo,
    updateTodoStatus,
    updateTodoStatusError,
    updateTodoStatusPending,
    updateTodoStatusSuccess
}