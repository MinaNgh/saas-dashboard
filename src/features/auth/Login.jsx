import { login } from "./authService";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    
    const handleLogin = () =>{
        login();
        navigate("/");
    };
    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;
