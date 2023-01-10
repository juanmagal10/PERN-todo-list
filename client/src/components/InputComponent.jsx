import { useEffect, useState, useRef } from "react";
import { submitInput, getTodos } from "../helpers/httpHelpers";
import axios from "axios";

const InputComponent = () => {
  const [todo, setTodo] = useState('');

  const handleChange = ({target}) => {
    setTodo(target.value)
  }
  
  const submitHandler=async (e) => {
    e.preventDefault();
    console.log(todo) 
    await axios.post('http://localhost:5000/todos', {
    todo
    })
      .then(res => console.log(res))
  }
  
  
  return (
   <>
      <h1 htmlFor="exampleInputEmail1" className="text-center mt-5">Todo List</h1>
    <form className="d-flex justify-content-center mt-5" onSubmit={submitHandler}>
        <input type="text" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a todo" onChange={handleChange} value={todo} />
      <button type="submit" className="btn btn-primary" onClick={submitInput}>Add todo</button>
    </form>
   </>
   
  )
}

export default InputComponent
