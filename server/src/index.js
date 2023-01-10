const express = require('express');
const cors = require('cors');

const app = express();

port=5000

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

//routes
app.use(require('./routes/index'));

//starting the server
app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})
