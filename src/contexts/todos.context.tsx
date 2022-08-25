import { Actions, State } from '../types/types';
import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/todo.reducer';

const initialState: State  = {
    todos: [],
    selectedTodo: null,
}

export const TodosContext = createContext<State>(initialState);
export const DispatchContext = createContext<React.Dispatch<Actions>>(() => null);

export function TodosProvider({children}:{ children: JSX.Element }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodosContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
            {children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}