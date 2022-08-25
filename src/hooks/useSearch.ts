import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../contexts/todos.context";
import { getFilteredTodos } from "../utils/getFilteredTodos";

export const useSearch = () => {
    const { todos } = useContext(TodosContext);
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        setSearch(search);
    };

    // запускаем функцию после каждого обновления в стейте 
    useEffect(() => {
        handleSearch();
    });

    const filteredTodos =  getFilteredTodos(todos, search);

    return {filteredTodos, setSearch, search}
};
