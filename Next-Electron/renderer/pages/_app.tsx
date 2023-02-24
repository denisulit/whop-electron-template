import "../styles/globals.css";

import type { AppProps } from "next/app";
import ToasterContextProvider from "../contexts/ToasterContext";
import AuthenticationContextProvider from "../contexts/AuthenticationContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthenticationContextProvider>
            <ToasterContextProvider>
                <Component {...pageProps} />
            </ToasterContextProvider>
        </AuthenticationContextProvider>
    )
}

export default MyApp;