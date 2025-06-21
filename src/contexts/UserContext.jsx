import { createContext } from "react";

let UserContext = createContext({
    userName: "",
    name: "",
    email: "",
    isAuthenticated: false,
});

export default UserContext;