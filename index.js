const config = require('./config.js');
let IRoutes = require('./routes/'+config.IRoutes);
let allRoutes = new IRoutes();  // subir as rotas de get
    allRoutes.createroutes() // subir as rotas de post
    allRoutes.listen(); // subir o backend
