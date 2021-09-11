require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB Acess Successfully')
        app.emit('Ready')
    })
    .catch((error) => console.log(error));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const { application } = require('express');



app.use(express.urlencoded( { extended:true } ));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// middlewares propios
app.use(middlewareGlobal)
app.use(routes);

app.on('Ready', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('servidor executando na porta 3000')
    });
})



