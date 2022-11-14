import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className={styles.header__container}>
      <ul className={styles.header__list}>
        <li className={styles['header__list-item']}>
          <Link className={pathname === '/' ? styles['header__list-item--active'] : ''} href="/">
            Home
          </Link>
        </li>
        <li className={styles['header__list-item']}>
          <Link className={pathname === '/blog' ? styles['header__list-item--active'] : ''} href="/blog">
            Blog
          </Link>
        </li>
        <li className={styles['header__list-item']}>
          <Link className={pathname === '/users' ? styles['header__list-item--active'] : ''} href="/users">
            Users
          </Link>
        </li>
      </ul>
    </header>
  );
}
