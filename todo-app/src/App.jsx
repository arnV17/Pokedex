import React from "react";
import Header from "./components/Header"
import Tabs from "./components/Tabs"  
import TodoList from "./components/TodoList"
import { useState } from "react";



function App() {
//   const todos = [
//   { input: 'Hello! Add your first todo!', complete: true },
//   { input: 'Get the groceries!', complete: false },
//   { input: 'Learn how to web design', complete: false },
//   { input: 'Say hi to gran gran', complete: true },
//  ]

     const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }])

     function handleAddTodo(newTodo) {
          const newList = [...todos,{ input: newTodo, complete: false }]

          setTodos(newList);
        }

  return (
    <div>
      
      <Header todos={todos} />
      <TodoList todos={todos} handleAddTodo={handleAddTodo} />

      <Tabs todos={todos} handle={handleAddTodo}/>
      <TodoInput handleAddTodo={handleAddTodo} />

      
      
      
      
      
    </div>
  );
}

export default App;
 