const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let FotosController = require('../controllers/' + config.IFotosController);

let fotosController = new FotosController();



class FotosRoutes extends IRoutes {

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
     app.get('/fotos/getall', (req, res) => fotosController.getall(req, res));
  }
  post() {
    app.post('/fotos/create', (req, res) => fotosController.create(req, res));
    // lista user
  }

  listen() {
    app.listen(3000, () => console.log('server started'));
  }

}
module.exports = FotosRoutes;
