import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;