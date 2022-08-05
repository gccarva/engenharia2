const express = require('express');
const bodyParser = require('body-parser');
//================================
const mongoose = require('mongoose');
var cors = require('cors');

const IRoutes = require('./IRoutes.js');

const app = express();


const config = require('../config.js');
let IUserController = require('../controllers/'+config.IUserController);



class UserRoutes extends IRoutes{

  constructor() {   
    super();
    mongoose.connect('mongodb+srv://vaguetti:dwm20221@cluster0.004qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  
} // finaliza construtor

  get(){
      app.get('/', (req, res) => {
      res.send('Rest API com Polimorfismo');
      });
      app.get('/user', IUserController.show);
// lista user, filtrando por email
// ex: /user/buscaemail/?email=vaguetti@gmail.com
//=========================
  }
  post(){
    app.post('/user', IUserController.store);
// lista user
  }

  listen(){
    app.listen(3000, () => console.log('server started'));
     }

}
module.exports = UserRoutes;
