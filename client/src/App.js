import Input from "./components/InputComponent";
import TodosList from "./components/TodosList";
import { useState, useEffect} from 'react';
import { getTodos, deleteTodo } from './helpers/httpHelpers';


function App() {
  const [toDos, setToDos] = useState([])

  useEffect(() => {
  
      getTodos(toDos, setToDos);

  }, [])
  
  return (
    <div className="App">
      <Input toDos={toDos} setToDos={setToDos} />
      <TodosList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
