import {
    Actions,
    ReducerActionTypes,
    State,
    StatusTypes,
} from "../types/types";

const reducer = (state: State, action: Actions) => {
    switch (action.type) {
        case ReducerActionTypes.ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: +Date.now(),
                        text: action.payload,
                        status: StatusTypes.todo,
                    },
                ],
            };
        case ReducerActionTypes.SELECT_TODO:
            const todo = state.todos.find((todo) => todo.id === action.payload);
            return {
                ...state,
                selectedTodo: todo ? todo : null,
            };
        case ReducerActionTypes.UPDATE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    action.payload.currentEditTodo?.id === todo.id
                        ? action.payload.currentEditTodo
                        : todo
                ),
            };
        case ReducerActionTypes.DELETE:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
