import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
  pageTitle: string
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props
  return (
    <>
      <Head>
        <title>Next Basic |{pageTitle}</title>
        <meta name='description' content='Learn basic next app with typescript' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.layout__container}>
        <Header />
        <div className={styles.layout__content}>{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default Layout
