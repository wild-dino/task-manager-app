import React, { FC, useState } from "react";
import { ITodo, StatusTypes } from "../../../../types/types";
import s from "./RadioBtns.module.css";

interface RadioBtnsProps {
    setCurrentEditTodo: (currentEditTodo: ITodo) => void;
    currentEditTodo: ITodo | null;
}

const RadioBtns: FC<RadioBtnsProps> = ({setCurrentEditTodo, currentEditTodo }) => {
    const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>(currentEditTodo!.status);
    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSelectedRadioBtn(e.currentTarget.value);
        setCurrentEditTodo({
            ...currentEditTodo!,
            status: e.currentTarget.value,
        })
    };

    return (
        <div className={s.radioBtnRow}>
            <div className={s.radioBtnItem}>
                <label htmlFor="todo">todo</label>
                <input
                    name="todo"
                    type="radio"
                    value={StatusTypes.todo}
                    checked={isRadioSelected(StatusTypes.todo)}
                    onChange={handleRadioClick}
                />
            </div>

           <div className={s.radioBtnItem}>
                <label htmlFor="doing">doing</label>
                <input
                    name="doing"
                    type="radio"
                    value={StatusTypes.doing}
                    checked={isRadioSelected(StatusTypes.doing)}
                    onChange={handleRadioClick}
                />
           </div>

           <div className={s.radioBtnItem}>
                <label htmlFor="done">done</label>
                <input
                    name="done"
                    type="radio"
                    value={StatusTypes.done}
                    checked={isRadioSelected(StatusTypes.done)}
                    onChange={handleRadioClick}
                />
           </div>
        </div>
    );
};

export default RadioBtns;
