import axios from 'axios'

//añadir tarea
export const submitInput =async (todo) => {
    try {
        await axios.post('http://localhost:5000/todos', {
        todo
        }).then(res=>console.log(res))
    } catch (error) {
        console.error(error.message);
    }
}


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
export const deleteTodo =async (id) => {
    try {
        axios.delete(`http://localhost:5000/todos/${id}`).then(res=>console.log(res))
    } catch(error) {
        console.error(error.message);
    } 
}



