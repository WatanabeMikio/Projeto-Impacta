import React from 'react';
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const Usuario = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState();
  
  const alterarValores = (value) => {
    setValues(valorAnterior => ({
      ...valorAnterior,
      [value.target.name]: value.target.value,
    }));
  };

  const createClickButton = () => {
    Axios.post(`http://localhost:3001/auth/register`,{
    name: values.name,
    email: values.email,
    password: values.password,
  }).then ((response) => {
    console.log(response);
   alert(response.data.message);
    if(response.data.code == 1) {
      navigate ('/') 
    }
  });
  };


  return  (
    <div className="cadastro--container">
      <div className = "register--container">
      <h2>Cadastro de Usuario</h2>
      <label>Nome </label>
      <input type="text" 
            name ="name" 
            placeholder="Digite o nome do Usuario" required
            onChange={alterarValores}/>

      <br></br>     

      <label>Email </label>
      <input type="email" 
            name ="email"
            placeholder="Digite o e-mail do Usuario" required
            onChange={alterarValores}/>

      <br></br>     
    
      <label>Password </label>
      <input type="text"
           name="password"
           placeholder="Digite o password" 
           required
           onChange={alterarValores}/>
      <br></br>     
           
      <button className="register--buttton" onClick={() => createClickButton()}>Enviar</button>

            
      </div>
      
    </div>
  );
};

export default Usuario;