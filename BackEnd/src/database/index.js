const mongoose = require("mongoose");

  try{
    mongoose.connect("mongodb+srv://Mikio:sukifuton26@projetoimpacta.bvufobp.mongodb.net/?retryWrites=true&w=majority");

    console.log("conexão com o Banco Estavel");
  }
  catch (error) {
    console.log(error);
  }

  




module.exports = mongoose;