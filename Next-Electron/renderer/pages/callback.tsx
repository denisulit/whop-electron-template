import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthenticationContext } from '../contexts/AuthenticationContext';
import styles from '../styles/Loader.module.css';

const OAuthCallbackPage = () => {
    const router = useRouter();

    const { setNewUser } = useAuthenticationContext();

    let access_token = router.query.access_token as string;
    let refresh_token = router.query.refresh_token as string;
    let expires_in = router.query.expires_in as string;

    useEffect(() => {
        if (access_token && refresh_token && expires_in) {
            setNewUser({
                access_token: router.query.access_token as string,
                refresh_token: router.query.refresh_token as string,
                expires_in: router.query.expires_in as string
            });

            router.push('/?login=true')
        } else {
            console.log(router.query)
            //router.push('/')
        }

    }, [router.query])

    return <div className={styles.loader} />
}

export default OAuthCallbackPage;