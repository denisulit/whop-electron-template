import "../styles/globals.css";

import type { AppProps } from "next/app";
import ToasterContextProvider from "../contexts/ToasterContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ToasterContextProvider>
            <Component {...pageProps} />
        </ToasterContextProvider>
    )
}

export default MyApp;