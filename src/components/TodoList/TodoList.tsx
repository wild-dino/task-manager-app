import React, { FC, useCallback, useContext } from "react";
import { DispatchContext } from "../../contexts/todos.context";
import { useSearch } from "../../hooks/useSearch";
import { ReducerActionTypes } from "../../types/types";

import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.css";

interface TodoListProps {
    widthStyle: {
        width: string;
    };
    startResize: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TodoList: FC<TodoListProps> = ({ widthStyle, startResize }) => {
    const dispatch = useContext(DispatchContext);
    const { setSearch, filteredTodos, search } = useSearch();

    const handleSelect = useCallback(
        (id: number) => {
            dispatch({ type: ReducerActionTypes.SELECT_TODO, payload: id });
        },
        [dispatch]
    );

    return (
        <div className={s.todosList} style={widthStyle}>
            <input
                value={search}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find task..."
            />
            <div className={s.todoListItems}>
                {filteredTodos.map((todo) => (
                    <TodoItem
                        status={todo.status}
                        id={todo.id}
                        text={todo.text}
                        key={todo.id}
                        handleSelect={handleSelect}
                    />
                ))}
            </div>
            <div className={s.dragger} onMouseDown={startResize}></div>
        </div>
    );
};

export default TodoList;
