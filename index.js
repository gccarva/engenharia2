const config = require('./config.js');
let IRoutes = require('./routes/'+config.IRoutes);
let userRoutes = new IRoutes();
    userRoutes.get();  // subir as rotas de get
    userRoutes.post(); // subir as rotas de post
    userRoutes.listen(); // subir o backend
