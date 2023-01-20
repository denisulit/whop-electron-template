import { useCallback, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../utils/logo.svg'
import { useRouter } from 'next/router'

const IndexPage = () => {
  const router = useRouter();

  const initiateOauth = useCallback(() => {
    router.push('https://whop.com/oauth?client_id=&redirect_uri=', {})
  }, [])

  return (
    <Layout title="OAuth Example with Whop || TypeScript + Next.js + Electron">
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://dash.whop.com"
          >
            Whop!
          </Link>
        </h1>

        <p className={styles.description}>
          This guide is a template for OAuth with Whop in an Electron app.
          Please click the button below to authenticate.
        </p>

        <div className={styles.grid}>
          <div onClick={initiateOauth} className={styles.card}>
            <p>
              <Image src={Logo} alt="Whop Logo" width={72} height={16} />
              Sign in with Whop
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://dash.whop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src={Logo} alt="Whop Logo" width={72} height={16} />
          </span>
        </Link>
      </footer>
    </Layout>
  )
}

export default IndexPage
