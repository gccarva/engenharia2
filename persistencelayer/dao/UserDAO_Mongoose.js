const mongoose = require('mongoose');

const IUserDAO = require('./IUserDAO.js');

const User = require('../models/User');


class UserDAO_Mongoose extends IUserDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://leandrovaguetti:engsoft2@poli.ihq71yz.mongodb.net/?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const user =  await User.create(req.body);
          return user;
     }  
     async recovery(){ 
          let users = await User.find();
          return users; 
         }controllers
   persistencelayer
   routes
     async update(req){
       let user = await User.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return user;
       
     }
     async delete(req){
        let user = await    User.findByIdAndRemove(req.params.id);
        return user; 
     } 
  
     async search(req){
        let users = await User.find(
          { email : req.query.email}
                                   ); 
       return users;
       
     } 
     
   
}
module.exports = UserDAO_Mongoose;