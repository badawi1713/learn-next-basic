import Image from 'next/image';
import { Layout } from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <section className={styles.heading}>
        <h1 className={styles.heading__title}>Welcome Dzaky Badawi</h1>
        <Image src="/images/illustration-01.svg" alt="illustration-01" width={400} height={400} />
      </section>
    </Layout>
  );
}
