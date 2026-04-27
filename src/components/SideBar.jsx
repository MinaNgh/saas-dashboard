import {Link } from "react-router-dom";
import React from "react";
function SideBar(){
    return(
        <div className="sidebar">
            <h2>SaaS App</h2>
            <nav className="nav">
                <Link className="nav-link" to="/">Dashboard</Link>
                <br/>
                <Link className="nav-link" to="/analytics">Analytics</Link>
            </nav>
        </div>
    );
}
export default React.memo(SideBar);