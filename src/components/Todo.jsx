import React from "react";

const Todo = ({task,toggleComplete,deleteTodo,editTodo})=>{
  
    return(
        <div className="Todo">
          <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed':"" }`}>{task.task}</p>
          
          <div>
          <i className="fa-regular fa-pen-to-square" onClick={()=>editTodo(task.id)}></i>
          <i className="fas fa-trash" onClick={()=>deleteTodo(task.id)}></i>
          </div>
        </div>
    )
}

export default Todo;