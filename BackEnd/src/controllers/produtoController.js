const express = require('express');
const cadastroProduto = require('../models/Produto');
const router = express.Router();
const vendaProduto = require('../models/vendaProduto');
const us = require('../models/User');

router.post ('/cadastroProduto', async (req , res) => {
  const {nameProduto} = req.body;
  const {quantidadeProduto} = req.body;

  try{
    cadastroProduto.findOne({nameProduto}).then((produto) => {
      if (!produto) {
        const CadastroProduto = cadastroProduto.create(req.body);
        return res.send({message: 'Produto Cadastrado com Sucesso'}); 
      }
      else {
        produto.set({quantidadeProduto: quantidadeProduto });
        produto.save();
        return res.send({message: 'Quantidade de produto Atulizada para ' + quantidadeProduto});
      }
    }); 
    }
        
  catch (err) {
      return res.send({message:'Falha ao Cadastrar Produto'});
    }
});

router.post ('/vendaProduto', async (req, res) => {
  const {nameProduto} = req.body;
  const {quantidadeProduto} = req.body;
  const {usuario} = req.body;
    

  try{
    cadastroProduto.findOne({nameProduto}).then((produto) => {
      if (!produto){
          return res.send({message: "Produto não encontrado"});
      }
      if (produto.quantidadeProduto < quantidadeProduto){
        const message = "Produto insuficiente para venda. \nO produto " + produto.nameProduto + " possui apenas " + produto.quantidadeProduto + " unidades.";
        return res.send({message});
      }
      else{
        us.findOne({email: usuario}).then((user) => {
          if (!user){
            return res.send({message: "não é possivel cadastrar a venda pois usuario não existe"});
          }
          else{

            const VendaProduto = vendaProduto.create({nameProduto, quantidadeProduto, usuario:user.name, dataHora:Date.now()});
            const quantidade = produto.quantidadeProduto - quantidadeProduto;
            produto.set({quantidadeProduto: quantidade});
            produto.save();
            return res.send({message: "Venda Cadastrada com Sucesso"});
          }
        });
        
      }
      
    });

  }
  catch (err){
    return res.send({message: "Falha ao Registar Venda de Produto"});
  }
});

router.get ('/relatorioVenda', async (req, res) => {
  try{
    const produtos = await vendaProduto.find({});
    console.log(produtos);
    if (produtos){
      return res.send({produtos});
    }
  }
  catch (err){
    return res.send({message: "Falha na Lista"});
  }
});
module.exports = app => app.use(router);