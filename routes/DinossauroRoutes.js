const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let DinossauroController = require('../controllers/' + config.IDinossauroController);

let dinossauroController = new DinossauroController();



class DinossauroRoutes extends IRoutes {

  constructor() {
    super();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
  } // finaliza construtor

  get() {
    app.get('/dinossauro/findbyid', (req, res) => {
      dinossauroController.findbyid(req, res);
    });
    app.get('/dinossauro/findall', (req, res) => dinossauroController.findall(req, res));


    // lista user, filtrando por email
    // ex: /user/search/?email=vaguetti@gmail.com
    //=========================
  }
  post() {
    app.post('/dinossauro/create', (req, res) => dinossauroController.create(req, res));
    app.post('/dinossauro/addfoto', (req, res) => dinossauroController.addfoto(req, res));
    // lista user
  }


}
module.exports = DinossauroRoutes;
