import React, { FC } from "react";
import { ITodo } from "../../../types/types";
import s from "./SelectedTodoOptions.module.css";

interface SelectedTodoOptionsProps {
    handleChange: () => void;
    handleDelete: (id: number) => void;
    currentEditTodo: ITodo | null;
}

const SelectedTodoOptions: FC<SelectedTodoOptionsProps> = ({
    handleChange,
    handleDelete,
    currentEditTodo,
}) => {
    return (
        currentEditTodo && (
            <div className={s.selectedTodo}>
                <div
                    className={s.todo}
                    style={{ color: currentEditTodo?.status }}
                >
                    {currentEditTodo?.text}
                </div>
                <div className={s.buttonRow}>
                    <button onClick={handleChange}>Update</button>
                    <button onClick={() => handleDelete(currentEditTodo?.id)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    );
};

export default SelectedTodoOptions;
