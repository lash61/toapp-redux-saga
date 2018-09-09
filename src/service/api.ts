import * as t from 'io-ts';

import {ITodo, TodoType} from 'domains/todos/todosTypes';
import {decode} from './apiValidation';

enum RequestMethods {
    GET = 'GET',
    POST = 'POST'
}

export interface IApiService {
    loadTodoList: () => Promise<ITodo[]>,
    loadTodo: (todoId: string) => Promise<ITodo>,
    updateTodoStatus: (todoId: string) => Promise<ITodo[]>
}

const request = (method: RequestMethods, resource: string, body?: string) => {
    return fetch(`http://localhost:8090/api${resource}`, {
        body,
        method,
        mode: 'cors'
    }).then(response => response.json());
};

const apiFactory = (): IApiService => {
    return {
        loadTodoList: (): Promise<ITodo[]> => {
            return request(RequestMethods.GET, '/todoList/')
                .then(decode<ITodo[]>(t.array(TodoType)));
        },

        loadTodo: (todoId: string): Promise<ITodo> => {
            return request(RequestMethods.GET, `/todoList/${todoId}`)
                .then(decode<ITodo>(TodoType));
        },

        updateTodoStatus: (todoId: string): Promise<ITodo[]> => {
            return request(RequestMethods.POST, `/todoList/${todoId}/updateStatus`)
                .then(decode<ITodo[]>(t.array(TodoType)));
        }
    }
};

export default apiFactory;