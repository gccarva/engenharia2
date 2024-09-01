const express = require('express');
const bodyParser = require('body-parser');
//================================


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
    // lista user, filtrando por email
    // ex: /user/search/?email=vaguetti@gmail.com
    //=========================
     app.get('/perguntas/getall', (req, res) => perguntasController.getall(req, res));
  }
  post() {
    app.post('/perguntas/create', (req, res) => perguntasController.create(req, res));
    // lista user
  }

}
module.exports = PerguntasRoutes;
