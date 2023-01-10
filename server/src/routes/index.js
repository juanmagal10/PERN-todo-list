const { Router } = require('express');
const { getTodos,
    getSingleTodo,
    addTodo,
    deleteTodo,
    updateTodo} = require('../controllers/index.controllers')

const router = Router();

router.get('/todos', getTodos);

router.get('/todos/:id', getSingleTodo);

router.post('/todos', addTodo);

router.delete('/todos/:id', deleteTodo);

router.put('/todos/:id', updateTodo);

module.exports = router;