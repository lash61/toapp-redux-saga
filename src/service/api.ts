import {ITodo} from 'domains/todos/todosTypes';

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
    }).then((response: Response) => {
        return response.json();
    });
};

const apiFactory = (): IApiService => {
    return {
        loadTodoList: () => {
            return request(RequestMethods.GET, '/todoList/');
        },

        loadTodo: (todoId: string) => {
            return request(RequestMethods.GET, `/todoList/${todoId}`)
        },

        updateTodoStatus: (todoId: string) => {
            return request(RequestMethods.POST, `/todoList/${todoId}/updateStatus`)
        }
    }
};

export default apiFactory;