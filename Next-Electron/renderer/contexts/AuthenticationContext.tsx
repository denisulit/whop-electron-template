import axios from "axios";
import React, { useState } from "react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

type User = {
    access_token: string;
    refresh_token: string;
    expires_in: string;
    expiresAt: Date;
    username: string;
}

const AuthenticationContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);

    function setNewUser({
        access_token,
        refresh_token,
        expires_in
    }: {
        access_token: string;
        refresh_token: string;
        expires_in: string;
    }) {
        axios.request({
            method: "GET",
            url: "https://api.whop.com/api/v2/me",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setUser({
                        access_token,
                        refresh_token,
                        expires_in,
                        expiresAt: new Date(parseInt(expires_in) * 1000),
                        username: response.data?.username || null
                    });
                }
            })
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                setNewUser,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContextProvider;

interface AuthenticationContext {
    user: User | null;
    setNewUser: ({
        access_token,
        refresh_token,
        expires_in
    }: {
        access_token: string;
        refresh_token: string;
        expires_in: string;
    }) => void;
}

export const AuthenticationContext =
    React.createContext<AuthenticationContext | null>(null)

export function useAuthenticationContext() {
    const context = React.useContext(AuthenticationContext);
    if (!context) throw Error('Auth Context must be provided');
    return context;
}