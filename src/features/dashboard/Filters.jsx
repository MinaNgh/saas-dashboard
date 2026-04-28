import { useCallback } from "react";

function Filters({filter, setFilter}){
    const handlefilter = useCallback((e)=>{
        setFilter(e.target.value);
        },[filter])
    return(
        <select value = {filter} onChange={handlefilter}>
            <option  value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
        </select>
    );
}
export default Filters;