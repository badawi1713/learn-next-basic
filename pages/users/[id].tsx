import axios from 'axios';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import styles from './Users.module.css';

interface User {
  name: string
  id: string
  email: string
}

interface UserDetailProps {
  user: User
}

function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const handleBack = () => {
    router.push('/users');
  };

  const { user } = props;
  return (
    <Layout pageTitle="User Detail">
      <button type="button" className="go-back__button" onClick={handleBack}>
        Go Back
      </button>
      <main className={styles.users__detail}>
        <p>
          ID #
          {user?.id}
        </p>
        <p>
          Name :
          {user?.name}
        </p>
        <p>
          Email :
          {user?.email}
        </p>
      </main>
    </Layout>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  let users = [];
  let paths = [];
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users = response?.data || [];
    paths = users?.map((item: User) => ({
      params: {
        id: `${item.id}`,
      },
    }));
  } catch (error) {
    console.log(error);
  }
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string
  }
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  let user = {};
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    user = response?.data || {};
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      user,
    },
  };
}
