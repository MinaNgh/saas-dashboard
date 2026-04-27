//Saves a fake token in browser
export const login = (token = "demo-token") => {
    localStorage.setItem("token",token);
}
export const logout = () => {
    localStorage.removeItem("token");
}
export const getToken = () => {
    return localStorage.getItem("token");
}