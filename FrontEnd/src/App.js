
import './App.css';

function App() {
  return (
    <div className="app--container">
      <div className = "register--container">
      <h2>Cadastro de Usuario</h2>
      <label>Nome</label>
      <input type="text" 
            name ="name" 
            placeholder="Digite o nome do Usuario" required/>

      <br></br>     

      <label>Email</label>
      <input type="email" 
            name ="email"
            placeholder="Digite o e-mail do Usuario" required/>

      <br></br>     
    
      <label>password</label>
      <input type="text"
           name="password"
           placeholder="Digite o password" 
           required/>
      <br></br>     
           
      <button type="submit">Enviar</button>

      </div>
      
    </div>
  );
}

export default App;
