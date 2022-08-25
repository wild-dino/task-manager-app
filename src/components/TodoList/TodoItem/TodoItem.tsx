import React, { FC } from "react";
import { ITodo} from "../../../types/types";
import s from "./TodoItem.module.css";

interface TodoItemProps extends ITodo {
    handleSelect: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = ({ text, id, status, handleSelect}) => {

    const handleClick = () => {
        handleSelect(id)
    }

    return (
        <>
            <div onClick={handleClick} className={s.todoItem} style={{color: status}}>
                {text}
            </div>
        </>
    );
};

export default TodoItem;
