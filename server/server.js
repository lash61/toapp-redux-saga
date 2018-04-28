const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const todoListService = require('./todoListService');

const config = {
    port: 8090
};

const app = new Koa();
const router = new Router();

const applyLatency = (millis = 1000) => {
    return new Promise((resolve, rejest) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
};

const createParamMiddleware = (paramName) => (id, ctx, next) => {
    ctx[paramName] = id;
    return next();
};
const todoIdParamMiddleWare = createParamMiddleware('todoId');

router
    .get('/api/todolist', (ctx, next) => {
        return applyLatency()
            .then(() => {
                ctx.body = todoListService.getTodoList();
            });
    });

router
    .param('todoId', todoIdParamMiddleWare)
    .get('/api/todolist/:todoId', (ctx, next) => {
        return applyLatency()
            .then(() => {
                ctx.body = todoListService.getTodoById(ctx.todoId);
            });
    });

router
    .param('todoId', todoIdParamMiddleWare)
    .post('/api/todolist/:todoId/updateStatus', (ctx, next) => {
        return applyLatency()
            .then(() => {
                ctx.body = todoListService.switchStatusForTodo(ctx.todoId);
            });
    });

app
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port);
