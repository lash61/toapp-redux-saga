export enum TodoStatus {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETE = 'COMPLETE',
}

export interface ITodo {
    id: string,
    title: string,
    goal: string,
    steps: ITodoStep[],
    status: TodoStatus
}

export interface ITodoStep {
    id: string,
    title: string,
    details: string
}