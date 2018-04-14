import {ITodo} from 'domains/types';

enum RequestMethods {
    GET = 'GET',
    POST = 'POST'
}

export interface IApiService {
    loadTodoList: () => Promise<ITodo[]>,
    loadTodo: (todoId: string) => Promise<ITodo>
}

const request = (method: RequestMethods, resource: string, body?: string) => {
    return fetch(`http://localhost:8090/api${resource}`, {
        body,
        method,
        mode: 'cors'
    }).then((response: Response) => {
        return response.json();
    }).catch((error: any) => {
       console.error(error);
    });
};

const apiFactory = (): IApiService => {
    return {
        loadTodoList: () => {
            return request(RequestMethods.GET, '/todoList/');
        },

        loadTodo: (todoId: string) => {
            return request(RequestMethods.GET, `/todoList/${todoId}`)
        }
    }
};

export default apiFactory;