import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { TodosProvider } from "./contexts/todos.context";

function App() {
    return (
        <>
            <TodosProvider>
                <Dashboard />
            </TodosProvider>
        </>
    );
}

export default App;
