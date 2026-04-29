import { login } from "./authService";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    
    const handleLogin = () =>{
        login();
        navigate("/");
    };
    return(
        <div className="container">
            <div className="card">
                <h2>Login Page</h2>
                <button id="loginButton" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;
