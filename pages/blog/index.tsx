import axios from 'axios'
import { Layout } from '../../components'
import styles from './Blog.module.css'

interface Blog {
  id: string
  title: string
  body: string
}

interface BlogProps {
  blogs: Array<any>
}

function Blog(props: BlogProps) {
  const { blogs } = props

  return (
    <Layout pageTitle='Blog'>
      <section className={styles.container__blog}>
        {blogs?.length > 0 &&
          blogs?.map((item: Blog) => (
            <div className={styles['container__blog-item']} key={item?.id}>
              <h3>{item?.title}</h3>
              <p>{item?.body}</p>
            </div>
          ))}
      </section>
    </Layout>
  )
}

export default Blog

export async function getServerSideProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const blogs = response?.data
  return {
    props: {
      blogs
    }
  }
}
