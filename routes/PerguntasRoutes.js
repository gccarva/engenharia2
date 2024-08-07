const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let PerguntasController = require('../controllers/' + config.IPerguntasController);

let perguntasController = new PerguntasController();



class PerguntasRoutes extends IRoutes {

  constructor() {
    super();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
  } // finaliza construtor

  get() {
    app.get('/perguntas/temas', (req, res) => perguntasController.getperguntabytemas(req, res));



    // lista user, filtrando por email
    // ex: /user/search/?email=vaguetti@gmail.com
    //=========================
  }
  post() {
    app.post('/perguntas/create', (req, res) => perguntasController.create(req, res));
    // lista user
  }

  listen() {
    app.listen(3000, () => console.log('server started'));
  }

}
module.exports = PerguntasRoutes;
