const express = require("express");
const router = express.Router();
const usuariomodelo = require("../modelos/usuario");


//localhost/alt/registro
router.post("/registro", async(req, res) => {
    const {email} = req.body;

    if(await usuariomodelo.findOne({email})){
      return res.status(400).json({
        message:'usuario cadastrado'
      })
    }
    const user = await usuariomodelo.create(req.body);
    user.passaword = undefined; 
    return req.json({
      message: "registro com sucesso"
    });
})

//localhost/alt/delete
router.delete("/delete", async(req, res) => {

  const user = await usuariomodelo.delete(req.body);

    return req.json({
      message: "registro deletado"
  });
})



module.exports = router;