import { useCallback } from "react";

function SearchBar({search, setSearch}){
    const handleSearch = useCallback((e)=>{
    setSearch(e.target.value);
    },[search])
    return(
        <input type="text" placeholder="Serach By name..." value={search} onChange={handleSearch} style = {{padding: "8px", width: "250px"}}></input>
    )
}
export default SearchBar;