import React from 'react';
import Axios from "axios";
import { useState } from "react";
import { Link} from 'react-router-dom';



const Produto = () => {

  const [values, setValues] = useState();
  
  const alterarValores = (value) => {
    setValues(valorAnterior => ({
      ...valorAnterior,
      [value.target.name]: value.target.value,
    }));
  };

  const createClickButton = () => {
      Axios.post(`http://localhost:3001/cadastroProduto`,{
      nameProduto: values.name,
      quantidadeProduto: values.quantidade,
  
    }).then ((response) => {
      console.log(response);
      alert(response.data.message);
    });
    };
    

  return (


    <div className='Produto--container'>
      <div className='registroProduto--container'>
        <h2>Produtos</h2>
        <br></br>
        <label>Nome do Produto</label>
          <input type="text" 
            name ="name" 
            placeholder="Digite o nome do Produto" required
            onChange={alterarValores}/>
        
        
        <br></br>
        <label>Quantidade</label>
          <input type="text" 
            name ="quantidade" 
            placeholder="Digite a quantidade do Produto" required
            onChange={alterarValores}/>

        <br></br>
        <br></br>

        <button className="register--buttton" onClick = {createClickButton} >Cadastrar / Atualizar</button>
        
        <br></br>

        <Link to="/venda">Vender Produto</Link>
      </div>
            
    </div>
  );
 
};

export default Produto;