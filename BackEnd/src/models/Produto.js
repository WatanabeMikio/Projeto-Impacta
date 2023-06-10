const mongoose = require ("../database");

const produtoSchema = new mongoose.Schema({
  nameProduto:{
    type: String,
    required: true,
  
  },

  quantidadeProduto:{
    type: Number,
    required: true,
  },
  
  

});

const cadastroProduto = mongoose.model("cadastroProduto", produtoSchema);


module.exports = cadastroProduto;

