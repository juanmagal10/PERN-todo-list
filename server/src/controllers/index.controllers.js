const { json } = require('express');
const express = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres', 
    password: 'jMg37107',
    host: 'localhost',
    port: 5432,
    database:'todolist_jmg'
})

//obtener todas las tareas
const getTodos =async (req, res) => {
 try {
     const allTodos = await pool.query('SELECT * FROM todos')
     res.json(allTodos.rows)
 } catch (error) {
    console.error(error.message);
 }
}

//obtener tarea especifica
const getSingleTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const singleTodo = await pool.query('SELECT * FROM todos WHERE todo_id=$1', [id])
        res.json(singleTodo.rows)
    } catch (error) {
        console.error(error.message);
    }
}

//añadir tarea
const addTodo = async (req, res) => {
    try {
        const { todo } = req.body;
        const newTodo = await pool.query('INSERT INTO todos (todo) VALUES ($1) RETURNING *', [todo]);
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message);
    }

}

//borrar tarea
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query('DELETE FROM todos WHERE todo_id=$1', [id]);

        res.json('todo deleted')
    } catch (error) { 
        console.error(error.message);
    }
}
 
//modificar tarea
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { todo } = req.body;
        
        const updatedTodo = await pool.query('UPDATE todos SET todo=$1 WHERE todo_id=$2', [todo, id])
        
        res.json('todo updated')

    } catch (error) {
        
    }
}



module.exports = {
    getTodos, 
    getSingleTodo, 
    addTodo,
    deleteTodo, 
    updateTodo
}