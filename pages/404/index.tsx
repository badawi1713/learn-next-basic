import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import styles from './Page404.module.css';

function Page404() {
  const router = useRouter();
  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(redirect);
  }, []);

  return (
    <Layout pageTitle="404">
      <main className={styles.container}>
        <h1 className={styles.heading__h1}>404,</h1>
        <h2 className={styles.heading__h2}>Sorry page not found!</h2>
      </main>
    </Layout>
  );
}

export default Page404;
