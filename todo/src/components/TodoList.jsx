import React from "react";
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import Todo from "./Todo";

const TodoList = () => {
  const [todos,setTodos]=useContext(TodoContext);
  return (
    1<=todos.length ? todos.map((item)=>{
      return(
    <Todo key = {item.id} id={item.id} title={item.title} completed={item.completed} />
      );
    }): (<h4>No Todo found.Please add some..</h4>)
    
  )
  }

export default TodoList;