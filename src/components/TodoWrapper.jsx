import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import Counter from "./Demo";

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
   
    const addTodo = todo => {
        setTodos([...todos, { id: Date.now(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);
    }
    const toggleComplete = (id)=>{
        setTodos(todos.map(todo=> todo.id===id ? {...todo,completed: !todo.completed }: todo))
    }
    const deleteTodo = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
                setTodos(todos.filter(todo=>todo.id!==id ))
              Swal.fire({
                title: "Deleted!",
                icon: "success"
              });
            }
          });
    }
    const editTodo = (id)=>{
        setTodos(todos.map(todo=>todo.id===id ? {...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask = (task,id)=>{
        setTodos(todos.map(todo=>todo.id===id ?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
    return (
        <div className="TodoWrapper">
            <h1>Plan.Do.Achieve!</h1>
            <TodoForm addTodo={addTodo} todos={todos} />
            
            {todos.map((todo, index) => (
                todo.isEditing?(
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ):(
                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            )
            )
            }
            
            <Counter />
        </div>
    )
}

export default TodoWrapper;