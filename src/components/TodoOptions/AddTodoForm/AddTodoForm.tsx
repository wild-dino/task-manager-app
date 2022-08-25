import React, { FC, useContext } from "react";
import { DispatchContext } from "../../../contexts/todos.context";
import {useInputState} from "../../../hooks/useInputState";
import { ReducerActionTypes } from "../../../types/types";

const AddTodoForm: FC = () => {
    const { value, handleChange, reset } = useInputState("");
    const dispatch = useContext(DispatchContext);

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {
            dispatch({ type: ReducerActionTypes.ADD, payload: value });
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={"Add new task..."}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
