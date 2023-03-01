import React from 'react'
import Todo from "./Todo";

function TodoList({todos,checkTodo,deleteTodo}){
    return (
        <div>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    title={todo.title}
                    checkTodo={checkTodo}
                    deleteTodo={deleteTodo}
                    id={todo.id}
                    isCompleted={todo.isCompleted}
                />
            )}
        </div>
    )

}

export default  TodoList;