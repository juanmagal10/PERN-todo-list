import Input from "./components/InputComponent";
import TodosList from "./components/TodosList";
import { useState, useEffect} from 'react';
import { getTodos, deleteTodo } from './helpers/httpHelpers';


function App() {
  const [toDos, setToDos] = useState([])

  useEffect(() => {
  
    getTodos(toDos, setToDos);

    
  }, [])
  
  const sortedTodos = toDos.sort((a, b)=> {
    return a.todo_id-b.todo_id
  })
  return (
    <div className="App">
      <Input toDos={sortedTodos} setToDos={setToDos} />
      <TodosList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
