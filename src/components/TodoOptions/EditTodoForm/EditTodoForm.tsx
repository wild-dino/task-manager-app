import React, { FC } from "react";
import { ITodo } from "../../../types/types";
import RadioBtns from "./RadioBtns/RadioBtns";

interface EditTodoFormProps {
    setCurrentEditTodo: (currentEditTodo: ITodo) => void;
    handleConfirmChanges: (currentEditTodo: ITodo) => void;
    currentEditTodo: ITodo | null;
    handleCancel: () => void;
}

const EditTodoForm: FC<EditTodoFormProps> = ({
    setCurrentEditTodo,
    handleConfirmChanges,
    currentEditTodo,
    handleCancel,
}) => {

    const onSubmitHandle = (e:React.MouseEvent<HTMLFormElement> ) => {
        e.preventDefault();
        handleConfirmChanges(currentEditTodo!)
    }

    return (
        <>
            <form onSubmit={onSubmitHandle}>
                <label htmlFor="editTask">Edit text: </label>
                <input
                    name="editTask"
                    type="text"
                    value={currentEditTodo?.text}
                    onChange={(e) =>
                        setCurrentEditTodo({
                            ...currentEditTodo!,
                            text: e.target.value,
                        })
                    }
                />
                 <button type="submit">Сonfirm</button>
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
            <RadioBtns
                currentEditTodo={currentEditTodo}
                setCurrentEditTodo={setCurrentEditTodo}
            />
        </>
    );
};

export default EditTodoForm;
