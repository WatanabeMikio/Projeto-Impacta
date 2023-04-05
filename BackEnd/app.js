const express = riquire('express');
const app = express();

app.use(express.json());

//conexaão banco
const config = riquire("../bancodado/config");

config();

app.listen(3030, () => {
  console.log('servidor funcionando');
})
