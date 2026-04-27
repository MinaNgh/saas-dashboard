//KPI Cards (Top Summary)
import React from "react";
//use React Query
function KpiCards({data}){
  
    return(
        
        <div className="cards">
            <div className="card">
                <h4>Total Users</h4>
                <p>{data.length}</p>
            </div>
            <div className="card">
                <h4>Revenue</h4>
                <p>${data.length*100}</p>
            </div>
            <div className="card">
                <h4>Active Users</h4>
                <p>{data.filter(user => user.status === "active").length}</p>
            </div>
        </div>
    );
}

export default React.memo(KpiCards);