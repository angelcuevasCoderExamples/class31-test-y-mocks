const express = require('express');
const { usersRouter } = require('./routes/users.router');

const port = 8080; 

const app = express();

app.use('/api/users', usersRouter);

app.listen(port, ()=>console.log(`running on port ${port}`))
