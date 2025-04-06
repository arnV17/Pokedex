import React from "react";
import Header from "./components/Header"
import Tabs from "./components/Tabs"  
import TodoList from "./components/TodoList"
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoCards from "./components/TodoCards";



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
          console.log("Added");
        }

      function handleDeleteTodo(index) {
        const newList = todos.filter((todo, i) => i !== index);
        setTodos(newList);
        console.log("Deleted");
        console.log("newdeleted%%%%%%%%%%List",newList)

      }  

  return (
    <div>
      
      
      <TodoList todos={todos} delete={handleDeleteTodo} />

      
      <TodoInput handleAddTodo={handleAddTodo} delete={handleDeleteTodo} />



      
      
      
      
      
    </div>
  );
}
//export default handleDeleteTodo();
export default App;

 