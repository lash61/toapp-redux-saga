import * as t from 'io-ts';

export enum TodoStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETE = 'COMPLETE',
}

export const TotoStatusUnion = t.union(
    Object.values(TodoStatus).map(v => t.literal(v)),
    'TodoStatus'
);

const TodoStepType = t.type({
    id: t.string,
    title: t.string,
    details: t.string
}, 'ITodoStep');

export interface ITodoStep extends t.TypeOf<typeof TodoStepType> {
}

export const TodoType = t.type({
    id: t.string,
    title: t.string,
    goal: t.string,
    steps: t.array(TodoStepType),
    status: TotoStatusUnion
}, 'ITodo');

export interface ITodo extends t.TypeOf<typeof TodoType> {
}