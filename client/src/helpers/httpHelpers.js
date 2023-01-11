import axios from 'axios'

//añadir tarea
// export const submitInput =async (todo) => {
//     try {
//         await axios.post('http://localhost:5000/todos', {
//         todo
//         }).then(res=>console.log(res))
//     } catch (error) {
//         console.error(error.message);
//     }
// }


//obtener las tareas de la db
export const getTodos = async (state, setState) => {
    try {
    const response = await axios('http://localhost:5000/todos');
        const { data } = response;
        setState(data)
        
    } catch (err) {
    console.error(err.message);
    }
}

//eliminar tarea
export const deleteTodo =async (id, state, setState) => {
    try {
        axios.delete(`http://localhost:5000/todos/${id}`)
        const filteredState = state.filter(todo => todo.todo_id !== id);
        setState(filteredState);
    } catch(error) {
        console.error(error.message);
    } 
}


//editar tarea
export const editTodo = async (id, state, setState, toDoEdited)=>{
    try {
        axios.put(`http://localhost:5000/todos/${id}`, {
            todo:toDoEdited
        })
    } catch (error) {
        console.log(error.message)
    }
}



