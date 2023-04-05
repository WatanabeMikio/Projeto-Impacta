const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Mikio:sukifuton26@projetoimpacta.bvufobp.mongodb.net/projetobacken?retryWrites=true&w=majority",{},(error)=>{
  if (error){
    console.log("falha na conexão ao mongobd");
    console.log(error);
    return;
  }

  console.log('conexão estavel');
});


mongoose.Promise = global.Promise;
module.exports = mongoose;