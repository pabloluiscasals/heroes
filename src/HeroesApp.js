import React, { useEffect } from 'react'
import { useReducer } from 'react/cjs/react.development';
import { AuthContext } from './auth/AuthContext'
import { AuthReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
};

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(AuthReducer, {}, init)
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{user, dispatch}}>
        <AppRouter />
        </AuthContext.Provider>
    )
}
