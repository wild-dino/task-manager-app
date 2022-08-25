import { FC, useContext, useEffect } from "react";
import { useState } from "react";
import { DispatchContext, TodosContext } from "../../contexts/todos.context";
import { ITodo, ReducerActionTypes } from "../../types/types";

import EditTodoForm from "./EditTodoForm/EditTodoForm";
import SelectedTodoOptions from "./SelectedTodoOptions/SelectedTodoOptions";
import AddTodoForm from "./AddTodoForm/AddTodoForm";

import s from "./TodoOptions.module.css";

const TodoOptions: FC = () => {
    const { selectedTodo } = useContext(TodosContext);
    const dispatch = useContext(DispatchContext);
    const [isEditting, setIsEditting] = useState(false);
    const [currentEditTodo, setCurrentEditTodo] = useState<ITodo | null>(null);

    useEffect(() => {
        setCurrentEditTodo(selectedTodo);
    }, [selectedTodo]);

    const handleChange = () => {
        setIsEditting(true);
        setCurrentEditTodo({ ...selectedTodo! });
    };

    const handleCancel = () => {
        setIsEditting(false);
        setCurrentEditTodo(selectedTodo);
    };

    const handleConfirmChanges = (currentEditTodo: ITodo) => {
        dispatch({
            type: ReducerActionTypes.UPDATE,
            payload: { currentEditTodo },
        });
        setIsEditting(false);
        setCurrentEditTodo(null);
    };

    const handleDelete = (id: number) => {
        dispatch({ type: ReducerActionTypes.DELETE, payload: id });
        setCurrentEditTodo(null);
    };

    return (
        <div className={s.editTodo}>
            {isEditting ? (
                <EditTodoForm
                    currentEditTodo={currentEditTodo}
                    setCurrentEditTodo={setCurrentEditTodo}
                    handleConfirmChanges={handleConfirmChanges}
                    handleCancel={handleCancel}
                />
            ) : (
                <>
                    <AddTodoForm />
                    <SelectedTodoOptions
                        currentEditTodo={currentEditTodo}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                    />
                </>
            )}
        </div>
    );
};

export default TodoOptions;
