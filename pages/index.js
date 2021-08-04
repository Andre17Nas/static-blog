import Head from 'next/head'
import PostItem from '../src/components/Item'
import styles from '../styles/Item.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      
      <main>
        <div className={styles.ItemWrapper}>
          <PostItem/>
          <PostItem/>
          <PostItem/>
        </div>
      </main>

    </>
  )
}



