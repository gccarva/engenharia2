const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let TemasController = require('../controllers/' + config.ITemasController);

let temasController = new TemasController();



class TemasRoutes extends IRoutes {

  constructor() {
    super();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
  } // finaliza construtor

  get(app) {
    // lista user, filtrando por email
    // ex: /user/search/?email=vaguetti@gmail.com
    //=========================
    app.get('/temas/getall', (req, res) => temasController.getall(req, res));
  }
  post(app) {
    app.post('/temas/create', (req, res) => temasController.create(req, res));
    // lista user
  }


}
module.exports = TemasRoutes;
