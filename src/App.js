import './App.css';
import TodoForm  from "./components/TodoForm";
import {useState} from "react";
import TodoList from "./components/TodoList";
import {v4} from "uuid";


function App() {
  const [todos,setTodos] = useState([
      {
          id:v4(),
          title:'Play chess',
          isCompleted:false
      },
      {
          id:v4(),
          title:'Play piano',
          isCompleted:false
      }

  ])

  const addTodo = (text) => {
      const newTodo = {
          id:v4(),
          title:text,
          isCompleted:false
      };
      setTodos([...todos,newTodo]);
  }

  const checkTodo = (id) => {
      setTodos(todos.map((todo) => {
          if (todo.id === id) {
              todo.isCompleted = !todo.isCompleted;
          }
          return todo;
      }))
  }

  const deleteTodo = (id) => {
      setTodos(
          (todos.filter((todo) => todo.id!==id))
      )
  }

  return (
    <div>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
