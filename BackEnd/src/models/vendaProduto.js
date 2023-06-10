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

  usuario:{
    type: String,
    required: true,
  },
  
  dataHora:{
    type: Date,
    required: true,
  },
  
});


const vendaProduto = mongoose.model("vendaProduto",produtoSchema );

module.exports = vendaProduto;