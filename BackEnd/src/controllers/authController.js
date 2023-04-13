const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post ('/register', async (req, res) => {

   const {email} = req.body;

   try {
      if (await User.findOne( { email }))
         return res.send({ message: 'Email de usuario já cadastrado'});

    const user = await User.create(req.body);

    user.password = undefined;

     return res.send({ message: 'Usuário Cadastrado com Sucesso' });
   }
   catch (err) {
    
    return res.send({ message: 'Falha ao Registrar'});
    
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

module.exports = app => app.use('/auth', router);