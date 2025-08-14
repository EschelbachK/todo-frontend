import TodoCard from "./components/TodoCard.tsx";
import type {Todo} from "./Todo.ts";
import type {TodoStatus} from "./TodoStatus.ts";
import NewTodoCard from "./components/NewTodoCard.tsx";

type Props = {
    status: TodoStatus,
    todos: Todo[],
    onTodoItemChange: () => void
}
export default function TodoColumn(props: Props) {
    return (
        <div>
            <h2>{props.status}</h2>

            {
                props.todos.map(todo => <TodoCard todo={todo} key={todo.id} onTodoItemChange={props.onTodoItemChange}/>)
            }
            {
                (props.status === "OPEN") && <NewTodoCard onTodoItemChange={props.onTodoItemChange}/>
            }
        </div>
    );
}
