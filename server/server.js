const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const R = require('ramda');
const todoList = require('./todoList');

const config = {
    port: 8090
};

const app = new Koa();
const router = new Router();

router
    .get('/api/todolist', (ctx, next) => {
        ctx.body = todoList;
    });

router
    .param('todoId', (id, ctx, next) => {
        ctx.todoId = id;
        return next();
    })
    .get('/api/todolist/:todoId', (ctx, next) => {
        const todoId = ctx.todoId;
        ctx.body = R.find(R.propEq('id', todoId))(todoList);
    });

app
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port);
