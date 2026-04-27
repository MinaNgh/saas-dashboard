import { logout } from "../features/auth/authService";
import { useNavigate } from "react-router-dom";
import React from "react";
function Header(){
    const navigate = useNavigate();
    const handleLogout = () =>{
        logout();
        navigate("/login");
    }
    return(
        <div className="header">
            <h3>Welcome</h3>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
}
export default React.memo(Header);