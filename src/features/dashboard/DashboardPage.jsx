import { useState } from "react";
import RevenueChart from "./RevenueChart";
import KpiCards from "./KpiCards";
import UsersTable from "./UsersTable";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import Sorts from "./Sorts";
import { useQuery } from "@tanstack/react-query";
import fetchUsers from "../../api/usersApi";
import React from "react";


function DashboardPage() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] =useState('all');
    const [sort, setSort] =useState('asc');
    // const {data=[]} = useQuery({
    //     queryKey : ["users"],
    //     queryFn : fetchUsers,
    // });
    const{ data = [], isLoading , error} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
    if(isLoading) <p>Loading users ...</p>;
    if(error) <p>Error loading users</p>;
    // Since my APi result doesn't have status so I add Status property for each user
    const usersWithStatus = data.map((item) => ({
        ...item,
        status: item.id % 2 === 0 ? "active" : "inactive",
        }));
    // console.log(usersWithStatus);
    const filteredData = React.useMemo(()=>{return usersWithStatus.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())).filter((item)=>{
        if(filter === "active") return item.status==="active";
        if(filter === "inactive") return item.status==="inactive";
       
        return true;
    }).sort((a,b) => {
        if(sort ==="asc") 
            return a.name.localeCompare(b.name);
        else 
            return b.name.localeCompare(a.name);
        
    }); },[usersWithStatus,filter,search,sort]); 
    // console.log(filteredData);
    return(
        <div className="container">
            <h1>Dashboard</h1>
            <div className="filter-bar">
                <SearchBar search={search} setSearch={setSearch}/>
                <Filters filter={filter} setFilter={setFilter}/>
                <Sorts sort={sort} setSort={setSort}/>
            </div>
            <KpiCards data={filteredData}/>
            <RevenueChart data={filteredData}/>           
            <UsersTable data={filteredData}/>
        </div>
    );
}
export default DashboardPage;