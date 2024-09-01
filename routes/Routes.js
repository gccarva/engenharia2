const express = require('express');
const bodyParser = require('body-parser');
//================================

var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let UsuarioRoutes = require('./' + config.UsuarioRoutes);
let TemasRoutes = require('./' + config.TemasRoutes);
let FotosRoutes = require('./' + config.FotosRoutes);

let DinossaurosRoutes = require('./' + config.DinossaurosRoutes);
let PerguntasRoutes = require('./' + config.DinossaurosRoutes);
let PontosRoutes = require('./' + config.DinossaurosRoutes);
class Routes extends IRoutes {

  constructor() {
    super();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));
  } // finaliza construtor

  creatroutes(){
    PontosRoutes.get(app);
    PontosRoutes.post(app);
    PerguntasRoutes.get(app);
    PerguntasRoutes.post(app);
    DinossaurosRoutes.get(app);
    DinossaurosRoutes.post(app);
    FotosRoutes.get(app);
    FotosRoutes.post(app);
    TemasRoutes.get(app);
    TemasRoutes.post(app);
    UsuarioRoutes.get(app);
    UsuarioRoutes.post(app);
  }

  listen() {
    app.listen(3000, () => console.log('server started'));
  }

}
module.exports = Routes;
