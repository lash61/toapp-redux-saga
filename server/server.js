const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const R = require('ramda');
const todoList = require('./todoList');

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

router
    .get('/api/todolist', (ctx, next) => {
        return applyLatency()
            .then(() => {
                ctx.body = todoList;
            });
    });

router
    .param('todoId', (id, ctx, next) => {
        ctx.todoId = id;
        return next();
    })
    .get('/api/todolist/:todoId', (ctx, next) => {
        return applyLatency()
            .then(() => {
                const todoId = ctx.todoId;
                ctx.body = R.find(R.propEq('id', todoId))(todoList);
            });
    });

const getNextStatus = (todoStatus) => {
    if (todoStatus === 'NOT_STARTED') {
        return 'IN_PROGRESS';
    }
    if (todoStatus === 'IN_PROGRESS') {
        return 'COMPLETE';
    }
    if (todoStatus === 'COMPLETE') {
        return 'NOT_STARTED';
    }
};

router
    .param('todoId', (id, ctx, next) => {
        ctx.todoId = id;
        return next();
    })
    .post('/api/todolist/:todoId/updateStatus', (ctx, next) => {
        return applyLatency()
            .then(() => {
                const todoId = ctx.todoId;
                const todoItem = R.find(R.propEq('id', todoId))(todoList);
                todoItem.status = getNextStatus(todoItem.status);
                ctx.body = todoList;
            });
    });

app
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port);
