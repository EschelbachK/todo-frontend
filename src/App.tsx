import './App.css'
import type {Todo} from "./Todo.ts";
import TodoCard from "./components/TodoCard.tsx";

function App() {

    const todos: Todo[] = [
        {
            "id": "abc1234",
            "description": "kochen",
            "status": "OPEN"
        },
        {
            "id": "abc14",
            "description": "putzen",
            "status": "IN_PROGRESS"
        }
    ]

  return (
    <>
        <h1>TODOs</h1>
        {
                todos.map(todo => <TodoCard  todo={todo} key={todo.id}/>)
        }
    </>
  )
}

export default App
