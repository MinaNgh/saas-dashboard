import apiClient from "./apiClient";

const fetchUsers = async ()=>{
    const response = await apiClient.get("/users");
    return response.data;
};
export default fetchUsers;