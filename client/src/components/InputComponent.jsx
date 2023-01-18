import { useEffect, useState, useRef } from "react";
import {getTodos } from "../helpers/httpHelpers";
import axios from "axios";

const InputComponent = ({toDos=[], setToDos}) => {
  const [todo, setTodo] = useState('');

  const handleChange = ({target}) => {
    setTodo(target.value)
  }
  
  //añadir tarea
  const submitHandler=async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post('http://localhost:5000/todos', {
    todo
      })
      setToDos([...toDos, res.data])
      
    } catch (e) {
      console.error(e.message);
   }
  }
  
  
  return (
   <>
    <h1 htmlFor="exampleInputEmail1" className="text-center mt-5">To-do List</h1>
    <form className="d-flex justify-content-center mt-5" onSubmit={submitHandler}>
        <input type="text" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a todo" onChange={handleChange} value={todo} />
      <button type="submit" className="btn btn-primary">Add to-do</button>
    </form>
   </>
   
  )
}

export default InputComponent
