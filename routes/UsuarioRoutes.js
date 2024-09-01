const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let UsuarioController = require('../controllers/' + config.IUsuarioController);

let usuarioController = new UsuarioController();



class UsuarioRoutes extends IRoutes {

  constructor() {
    super();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
  } // finaliza construtor

  get() {
    app.get('/user/login', (req, res) => usuarioController.login(req, res));



    // lista user, filtrando por email
    // ex: /user/search/?email=vaguetti@gmail.com
    //=========================
  }
  post() {
    app.post('/user/create', (req, res) => userController.create(req, res));
    app.post('/user/gainpontos', (req, res) => userController.addpontos(req, res));
    app.post('/user/addpergunta', (req, res) => userController.addpergunta(req, res));
    // lista user
  }

  listen() {
    app.listen(3000, () => console.log('server started'));
  }

}
module.exports = UsuarioRoutes;
