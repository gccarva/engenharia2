const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let PontosController = require('../controllers/' + config.IPontosController);

let pontosController = new PontosController();



class PontosRoutes extends IRoutes {

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
    app.get('/pontos/getall', (req, res) => pontosController.getall(req, res));
  }
  post() {
    app.post('/pontos/create', (req, res) => pontosController.create(req, res));
    // lista user
  }


}
module.exports = PontosRoutes;
