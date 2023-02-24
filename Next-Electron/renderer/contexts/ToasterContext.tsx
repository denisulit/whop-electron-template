import React, { ReactNode, useState } from 'react';
import Toaster from '../components/Toaster';

interface Props {
    children: ReactNode;
}

type ToasterProps = {
    message: string;
    variant: 'success' | 'error';
}

const ToasterContextProvider = ({ children }: Props) => {
    const [toaster, setToaster] = useState<ToasterProps | null>(null);

    function toast({ variant, message }: ToasterProps) {
        if (!toaster) {
            setToaster({
                variant,
                message
            });
            setTimeout(() => {
                setToaster(null);
            }, 2000)
        }
    }

    return (
        <ToasterContext.Provider
            value={{
                toaster: toaster,
                toast: toast
            }}
        >
            {children}
            <Toaster show={toaster !== null} variant={toaster?.variant} message={toaster?.message} />
        </ToasterContext.Provider>
    )
}

export default ToasterContextProvider;

interface ToasterContext {
    toaster: ToasterProps | null;
    toast: ({
        variant,
        message
    }: ToasterProps) => void;
}

export const ToasterContext =
    React.createContext<ToasterContext | null>(null);

export function useToasterContext() {
    const context = React.useContext(ToasterContext);
    if (!context) throw Error('Toaster Context must be provided');
    return context;
}
