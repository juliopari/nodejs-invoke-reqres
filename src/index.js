var express = require('express');
const { PORT } = require('./config');
const routes  = require('./routes/user.route');
var app = express();

app.use(express.json());

app.use('/api/v1',routes);

app.listen(PORT,()=>{
    console.log('Server listen on Port: ' + PORT)
})

module.exports = app;
