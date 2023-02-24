import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../utils/logo.svg'
import { useRouter } from 'next/router'
import { useToasterContext } from '../contexts/ToasterContext'
import AuthenticatedBlock from '../components/AuthenticatedBlock'

const IndexPage = () => {
  const router = useRouter();

  const { toast } = useToasterContext();

  const initiateOauth = useCallback(() => {
    try {
      router.push({ // note: fix this object
        pathname: "https://whop.com/oauth",
        query: {
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID, // required, get from dash.whop.com in settings
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI
          /*
          ** required
          ** redirect to your api, in this example case that will be localhost:3000 defined in /API/index.ts
          */
        }
      })
      //toast({ variant: "error", message: "Error loading Whop OAuth" });
    } catch (e) {
      alert("Unfortunately we we're unable to redirect you to Whop for authentication.")
    }
  }, []);

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
          <div onClick={initiateOauth} className={styles.card} style={{ cursor: "pointer" }}>
            <p>
              <Image src={Logo} alt="Whop Logo" width={72} height={16} />
              Sign in with Whop
            </p>
          </div>
          <AuthenticatedBlock />
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
