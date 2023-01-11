import { useState, useEffect} from 'react';
import { getTodos, deleteTodo } from '../helpers/httpHelpers';
import UpdateTodo from './UpdateTodo';

const TodosList = () => {
  const [toDos, setToDos] = useState([])

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
                  <th scope="col"><button className='btn btn-danger' onClick={()=>deleteTodo(todo_id, toDos, setToDos)} >Delete</button></th> 
              </tr>
        )
      })}
    
    </thead>
  
</table>
    </>
  )
}

export default TodosList
