import { useContext } from "react";
import "./App.css";
import firebase from "./Firebase/index";
import "firebase/auth";
import { contextAuth } from "./Firebase/auth";

const email = "pepe2@pepe.com";
const password = "2244556T";

function App() {
 const {user,  handleRegister, handleLogin, handleLogout} = useContext(contextAuth)
 
  

  return (
    <div className="App">
      <h1>Bienvenido a tu app</h1>

      {user ? (
        <div>
          <h3>
            {user.email}|{user.id}
          </h3>
          <button onClick={handleLogout}>LogOut</button>
        </div>
      ) : (
        <div>
          <button onClick={()=>handleRegister}>Registrar usuario</button>
          <button onClick={()=>handleLogin}>Want to Login</button>
        </div>
      )}

    </div>
  );
}

export default App;
