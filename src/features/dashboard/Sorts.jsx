import { useCallback } from "react";
function Sorts({sort,setSort}){
    const handleSort = useCallback((e)=>{setSort(e.target.value)},[setSort]);
    return(
        <select value={sort} onChange={handleSort}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
    );
}
export default Sorts;