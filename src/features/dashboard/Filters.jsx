function Filters({filter, setFilter}){
    return(
        <select value = {filter} onChange={(e)=>setFilter(e.target.value)}>
            <option  value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
        </select>
    );
}
export default Filters;