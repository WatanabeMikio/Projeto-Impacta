const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post ('/register', async (req, res) => {

   const {email} = req.body;

   try {
      if (await User.findOne( { email }))
         return res.send({ code: 2, message: 'Email de usuario já cadastrado'});

    const user = await User.create(req.body);

    
     return res.send({ code: 1, message: 'Usuário Cadastrado com Sucesso' });
   }
   catch (err) {
    
    return res.send({ code: 2, message: 'Falha ao Registrar'});
    
   }
   
});
router.delete('/delete', async(req,res) => {

   const { email } = req.body;

   try{

      if (await User.deleteOne( { email }))
         return res.send({ message: 'Usuario deletado com sucesso'});
      }
   catch(err){
      return res.send({message: 'Falha ao deletar usuario'});
   }
});

router.post ('/login', async (req, res) => {
   const {email, password} = req.body;
 
   

   if(await User.findOne({ email, password }))
      {return res.send({ message:'Usuario Logado'});};



   res.statusCode = 401;
      return res.send({ message: 'E-mail de usuario não cadastrado ou senha invalida', });
 
 
 });

module.exports = app => app.use('/auth', router);