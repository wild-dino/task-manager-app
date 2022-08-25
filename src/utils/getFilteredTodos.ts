import { ITodo } from "./../types/types";

// поиск возможных совпадений 
export const getFilteredTodos = (todos: ITodo[], search: string) => {
    return todos.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLocaleLowerCase())
    );
};
