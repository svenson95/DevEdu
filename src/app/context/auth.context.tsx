import React, {createContext, useEffect, useState} from "react";
import AuthService from "../services/auth.service";
import {LoadingSpinner} from "../components/Spinner";

export const AuthContext = createContext(false as any);

export default ({ ...props }) => {

    const [user, setUser] = useState(null as any);
    const [isAuthenticated, setAuthenticated] = useState(null as any);
    const [token, setToken] = useState(null);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            console.log(data);
            setUser(data.user);
            setAuthenticated(data.isAuthenticated);
            setToken(data.token);
        }).catch(err => {
            console.log(err);
            setUser(null);
            setAuthenticated(false);
        });
    }, []);

    return (
        <AuthContext.Provider value={{token, setToken, isAuthenticated, setAuthenticated, user, setUser, theme, setTheme}}>
            { isAuthenticated !== null ? props.children : <LoadingSpinner appLoader={true}/> }
        </AuthContext.Provider>
    )
}
