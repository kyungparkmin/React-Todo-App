import React, {useState, useContext} from 'react';
import Todo from '../Components/Todo.js';
import TodoContext from '../Contexts/TodoContext.js';






export default function TodoList(props) {
    const [value, setValues] = useState("");

    const {todos, dispatch} = useContext(TodoContext);
    const currentNextId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1;

    return (
        <div>
            <div>
                <input
                    placeholder="Add todo"
                    value={value}
                    onKeyPress={(e) => {
                        if (e.key === "Enter" && value !== "") {
                            dispatch({
                                type: "add",
                                id: currentNextId,
                                content: value
                            });
                            setValues("");
                        }
                    }}
                    onChange={(e) => setValues(e.target.value)}
                />
                <button
                    onClick={() => {
                        if (value !== "") {
                            dispatch({
                                type: "add",
                                id: currentNextId,
                                content: value
                            });
                        }
                        setValues("");
                    }}
                >
                    추가
                </button>
            </div>
            <div>
                {todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo}/>
                })}
            </div>
        </div>
    )
}