export const setJwt = (token) => localStorage.setItem("jwt", token);
export const getJwt = () => localStorage.getItem("jwt") || "INVALID_JWT";
