import React, { useState } from "react";
import './App.css';
import Axios from "axios";



function App() {

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
    });
    };

   
  return (
    <div className="app--container">
      <div className = "register--container">
      <h2>Cadastro de Usuario</h2>
      <label>nome</label>
      <input type="text" 
            name ="name" 
            placeholder="Digite o nome do Usuario" required
            onChange={alterarValores}/>

      <br></br>     

      <label>email</label>
      <input type="email" 
            name ="email"
            placeholder="Digite o e-mail do Usuario" required
            onChange={alterarValores}/>

      <br></br>     
    
      <label>password</label>
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
}

export default App;
