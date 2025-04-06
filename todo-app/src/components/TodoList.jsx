import React from 'react';
import TodoCards from './TodoCards';

export default function TodoList(props) {
    const todos = props.todos;
    console.log("yotoyoto,",todos); // Logs the full todos array

    //const filtered = todos.filter(todo => !todo.complete); // Store incomplete todos

    return (
        <div>
            <h1>Todo List</h1>
            {todos.map((todo, i) => (
                <TodoCards todoInput={todo} key={i} index={i} pro={props} />
            ))}
        </div>
    );
}
