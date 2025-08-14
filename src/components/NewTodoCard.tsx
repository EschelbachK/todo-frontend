import type {Todo} from "../Todo.ts";
import {useState} from "react";
import axios from "axios";

type Props = {
    whenTodoItemSaved: () => void
}

export default function NewTodoCard(props: Props) {

    const [text, setText] = useState("");

    function changeText(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function saveTodo() {
        setText("")
        axios.post("/api/todo",
            {
                description: text,
                status: "OPEN",
            } as Todo)
            .then(props.whenTodoItemSaved)
    }

    return (
        <div className="todo-card new-todo">
            <input type="text" value={text} onInput={changeText}/>
            <button className="input-save" onClick={saveTodo}>Save</button>
        </div>
    );
}
