import React from 'react';
import { useState } from 'react';
// import {editTodo} from '../helpers/httpHelpers';
import axios from 'axios';
import { useEffect } from 'react';

const UpdateTodo = ({singleToDo, toDos=[], setToDos }) => {
  const { todo_id, todo } = singleToDo;
  const [newTodo, setNewTodo] = useState(todo);
  const id=todo_id

  const editTodo = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.put(`http://localhost:5000/todos/${id}`, {
        newTodo,
        id
        }
      )
      setNewTodo(res.data);
      // setToDos([...toDos, toDos.map((todoToEdit) => {
      //   if (todoToEdit.todo_id === id) {
      //     return {
      //       ...todoToEdit,
      //       todo:newTodo
      //     }
          
      //   }
      //   return todoToEdit
      // }
      // )]
      // )
      // 
      // setToDos([toDos.filter(todo => todo.todo_id === id), res.data])
      const filteredToDos = toDos.filter(todo => todo.todo_id !== id)
      setToDos([...filteredToDos, res.data])
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = ({ target }) => {
    setNewTodo(target.value)
  }
  

  return (
    <>  
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#id${todo_id}`}>
          Edit to-do
        </button>


      <form className="modal fade" onSubmit={editTodo} id={`id${todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content px-2">
              <div className="modal-header">
                <h5 className="modal-title" id={`id${todo_id}-title`}>Edit to-do</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <input type='text' className="form-control border-0" defaultValue={singleToDo.todo} onChange={handleChange} />
              
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </form>
    </>
  )
}

export default UpdateTodo
