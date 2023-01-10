import { useState, useEffect, useRef } from 'react';
import { getTodos, deleteTodo } from '../helpers/httpHelpers';

const TodosList = () => {
  const [toDos, setToDos] = useState([])
  
  const refDelete=useRef()

  useEffect(() => {
      
      getTodos(toDos, setToDos);

    },[])

  
  return (
    <>
    <table className="table w-75 mx-auto mt-5">
     
        <thead>
      
            {toDos.map((singleTodo, index) => {
              const {todo_id,todo}=singleTodo
          return (
              <tr key={todo_id}>
                  <th scope="col">{index+1}</th>
                  <th scope="col">{todo}</th> 
                  <th scope="col"><button className='btn btn-success'>Update</button></th> 
                  <th scope="col"><button className='btn btn-danger' onClick={()=>deleteTodo(todo_id)}  ref={refDelete}>Delete</button></th> 
              </tr>
        )
      })}
    
    </thead>
  
</table>
    </>
  )
}

export default TodosList
