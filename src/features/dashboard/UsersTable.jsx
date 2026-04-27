import React from "react";
function UsersTable({data}){
    return (
        <div className="table-container">
        <table border="1" className="user-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <span className={item.status === "active" ? "status active" : "status inactive"}>
                        {item.status}</span>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default React.memo(UsersTable);