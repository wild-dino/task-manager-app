import { useState } from "react";

export const useInputState = (initialVal: "") => {
    const [value, setValue] = useState<string>(initialVal);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };
    const reset = (): void => {
        setValue("");
    };

    return { value, handleChange, reset };
}
