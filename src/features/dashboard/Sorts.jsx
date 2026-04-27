import { useCallback } from "react";
function Sorts({sort,setSort}){
    const handleFilter = useCallback((e)=>{setSort(e.target.value)},[]);
    return(
        <select value={sort} onChange={handleFilter}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
    );
}
export default Sorts;