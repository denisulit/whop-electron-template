import { useAuthenticationContext } from '../contexts/AuthenticationContext'
import styles from '../styles/Home.module.css'

const AuthenticatedBlock = () => {
    const { user } = useAuthenticationContext();

    if (!user) return <></>;

    return (
        <div className={styles.card}>
            Welcome, {user.username}
        </div>
    )
}

export default AuthenticatedBlock
