import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const navigate = useNavigate();
  


 const createClickButton = event => {
  event.preventDefault();
    Axios.post(`http://localhost:3001/auth/login`,{
    email: email,
    password: password,

  }).then ((response) => {
    sessionStorage.setItem("usuario", email);
    navigate('/produto')
    }).catch ((error) => {
      if (error.response.status == 401)
        {
          alert ("E-mail de usuario não cadastrado ou senha invalida");
        }
      else {
        alert ("Ocorreu um erro inesperado");
      }
    });

  };
  
 
  
  return (
  <div className='container'>
  <form>
  <div className= 'login--container'>
    <h2>Login</h2>
    <label>Email </label>
    <input type="email" 
        value ={email} 
        placeholder="Digite o email" required
        onChange={(e) => [setEmail(e.target.value) ]}/>
      

    <br/>

    <label>Password </label>
    <input type="text"
       value={password}
       placeholder="Digite o password" required
       onChange={(e) => [setPassowrd(e.target.value)]}/>

    <br/>
    
    <button className="login--buttton" onClick = {createClickButton}>Entrar</button>
    
    <br/>
    <br/>

    <Link to="/usuario">Cadastre-se</Link>  
    


  </div>
  </form>
  
</div>

);


};

export default Login;