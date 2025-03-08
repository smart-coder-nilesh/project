import { createContext, useState, ReactNode } from "react";
import { AuthContextType } from "./authinterface";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;



export const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    const login = (token: string) => {
        setToken(token);
        localStorage.setItem("token", token);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

