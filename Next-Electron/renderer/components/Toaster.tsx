import { clsx } from "clsx";
import styles from "../styles/Toaster.module.scss";

type ToasterType = {
    variant?: 'success' | 'error';
    message?: string;
    show: boolean;
}

const Toaster = ({ variant, message, show }: ToasterType) => {
    if (!show) return <></>;

    return (
        <>
            {/* Note: When off of plane, download and convert to clsx */}
            <div className={clsx(styles.toaster, {
                [styles.open]: show
            })}>
                <div className={`${styles.toasterProperties} ${styles[variant]}`}>
                    {message}
                </div>
            </div>
        </>
    )
}

export default Toaster;