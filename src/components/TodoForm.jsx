import React, {useState} from "react";

const TodoForm = ({addTodo,todos}) =>{
    const [value,setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        if(value.trim()===""){
            Swal.fire({
                text: 'Enter a valid todo!',
              }); 
              return;
        }
        if(todos.some(todo=>todo.task==value)){
            Swal.fire({
                text: 'This todo is already in your list'
            })
            return;
        }
        addTodo(value);
        setValue("");
    }
    return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder="What is the task today?" onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit" className="todo-btn">Add Task</button>
    </form>
    )
}

export default TodoForm;
