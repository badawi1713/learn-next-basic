import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import styles from './Users.module.css';

interface UsersProps {
  users: Array<any>;
}

function Users(props: UsersProps) {
  const { users } = props;
  const router = useRouter();

  const handleNavigateUserDetail = (id: string) => {
    router.push(`/users/${id}`);
  };

  return (
    <Layout pageTitle="Users">
      <section className={styles.users__container}>
        {users?.length > 0
          && users?.map((item) => (
            <button
              type="button"
              className={styles.users__item}
              onClick={() => handleNavigateUserDetail(item.id)}
              key={item?.id}
            >
              <p>
                {item?.name}
                {' '}
                <br />
                (
                {item?.email}
                )
              </p>
            </button>
          ))}
      </section>
    </Layout>
  );
}

export default Users;

// getStaticProps
export async function getStaticProps() {
  let users = [];
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    users = response?.data || [];
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      users,
    },
  };
}
