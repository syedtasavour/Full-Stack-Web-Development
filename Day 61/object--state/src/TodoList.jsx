import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
let [todos, setTodos] = useState([{task: "sample", id: uuidv4()}]);
  let [newTodo,setNewTodo] = useState('');

  
  let addNewTask = () =>{
    setTodos((prevTodos)=>{
       return [...todos,{task:newTodo,id:uuidv4()}]
    });setNewTodo("");
  }
  let updateTaskVal =(event) =>{
    
    setNewTodo(event.target.value);
  }
  let deleteTodo =(id)=>{
    setTodos(todos.filter((todo)=> todo.id != id));
    
  }

  return (
    <div>
      <input placeholder="Add a task" value={newTodo} onChange={updateTaskVal}></input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button> <br /> <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key ={todo.id}><span>{todo.task}</span>&nbsp; &nbsp; &nbsp; &nbsp; 
          <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
