import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import PostItem from '../components/Item'
import styles from '../styles/Item.module.css'

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      
      <main>
      <div>
        <h1>Latest Post</h1>
        <tr/>
      </div>
        <div className={styles.ItemWrapper}>
          {posts.map((post, index) => (
            <PostItem
            post={post}         
            />
          ))}
        </div>
      </main>

    </>
  )
}



/*

*/
export async function getStaticProps(){

  // get files from the post
  const files = fs.readdirSync(path.join('posts'))
  
  //create slug
  const posts = files.map( filename => {

  const slug = filename.replace(".md", "")

  //get frontmatter    
  const markdownWithMeta = fs.readFileSync(path.join("posts",filename), 'utf-8')
  const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }

  })

  console.log(posts)

  return {
      props: {
          posts: posts, 
      },
  }
}