import React from 'react';
import Axios from "axios";
import { useState, useEffect } from "react";


const Venda = () => {
  const [values, setValues] = useState();
  const [relatorio, setRelatorio] = useState([]);

  const alterarValores = (value) => {
    setValues(valorAnterior => ({
      ...valorAnterior,
      [value.target.name]: value.target.value,
    }));
  };

  const createClickButton = () => {
      Axios.post(`http://localhost:3001/vendaProduto`,{
      nameProduto: values.name,
      quantidadeProduto: values.quantidade,
      usuario: sessionStorage.getItem("usuario")
  
    }).then ((response) => {
      console.log(response);
      alert(response.data.message);
      
    });
    };

  const listaVenda = async () => {
    Axios.get('http://localhost:3001/relatorioVenda').then ((response) => {
      console.log(response);
      setRelatorio (response.data.produtos.slice(0, response.data.produtos.lenth));
    });
    
  };

  useEffect(() => {
    listaVenda();
  },[]);

  

  return (

    <div className='Produto--container'>
      <div className='registroProduto--container'>
        <h2>Venda de Produtos</h2>
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

        <button className="register--buttton" onClick = {createClickButton}>Vender</button>

        <br></br>
        <br></br>

        <br></br>
        <br></br>

        <hr></hr>

        <h2>Lista de Vendas de Produtos</h2>

        <button className="register--buttton" onClick = {listaVenda}>Consultar Venda</button>
        
        <br></br>
        <br></br>

        
        <table>
          <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Usuario</th>
            <th>Data/Hora</th>
          </tr>
          </thead>
          <tbody>
          {relatorio.map((val, key) => {
            return (
              <tr key = {key}>
                <td>{val.nameProduto}</td>
                <td>{val.quantidadeProduto}</td>
                <td>{val.usuario}</td>
                <td>{val.dataHora}</td>
              </tr>
            )
          })}
          </tbody>
        </table>    
        


      </div>
            
    </div>
  );
 
};

export default Venda;