export interface ITodo {
    id: number;
    text: string;
    status: string;
}

export enum StatusTypes {
    doing = '#1372ff',
    todo = '#959595',
    done = '#52ff13'
}

export interface State {
    todos: ITodo[];
    selectedTodo: ITodo | null;
}

// типы экшенов

export enum ReducerActionTypes {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    SELECT_TODO = 'SELECT_TODO',
    DELETE = 'DELETE'
}

interface AddAction {
    type: ReducerActionTypes.ADD;
    payload: string;
}

interface UpdateAction {
    type: ReducerActionTypes.UPDATE;
    payload: {
       currentEditTodo: ITodo | null;
    };
}

interface SelectItemAction {
    type: ReducerActionTypes.SELECT_TODO;
    payload: number;
}

interface DeleteAction {
    type: ReducerActionTypes.DELETE,
    payload: number
}

export type Actions = UpdateAction | AddAction | SelectItemAction | DeleteAction;