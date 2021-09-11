const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoControllers')

route.get('/', homeController.paginaInicial, (req, res, next) =>{
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`'ultimoMiddleware' Olha no que tem na re.session.nome ${req.session.nome}`);

});
route.post('/', homeController.trataPost)

// rotas de contato
route.get('/contato', contatoController.contato)

module.exports = route;

