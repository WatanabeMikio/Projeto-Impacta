const express = require('express');
const rotas = require("./rotas/registro");
const banco = require("./bancodado/Config");

banco();
const app = express();
app.use(express.json());


app.use("/alt", rotas);





app.listen(3030, () => {
  console.log('servidor funcionando');
})

