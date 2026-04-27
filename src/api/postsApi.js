import apiClient from "./apiClient";

const fetchPosts = async () =>{
    const response = await apiClient.get("/posts");
    return response.data;
}
export default fetchPosts;