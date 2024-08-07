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
    app.get('/pontos/top', (req, res) => pontosController.top(req, res));
    app.get('/pontos/user', (req, res) => pontosController.getbyuser(req, res));


    // lista user, filtrando por email
    // ex: /user/search/?email=vaguetti@gmail.com
    //=========================
  }
  post() {
    app.post('/pontos/gain', (req, res) => pontosController.create(req, res));
    // lista user
  }

  listen() {
    app.listen(3000, () => console.log('server started'));
  }

}
module.exports = PontosRoutes;
