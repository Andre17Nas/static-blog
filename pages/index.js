import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from 'gray-matter'
import PostItem from '../components/Item'
import styles from '../styles/Item.module.css'
import {sortByDate} from '../utils'

/* for contentful CMS */
import {createClient} from 'contentful'

export default function Home({posts, cposts}) {
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
          {cposts.map((post) => (
            <PostItem
            key={post.sys.id}
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

  /* for contentful CMS */
  const client = createClient({ 
    space: process.env.CONTENTFUL_SPACE_ID, 
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN })

    const res = await client.getEntries({
      content_type: 'post'
    })


  return {
      props: {
          posts: posts.sort(sortByDate), 
          cposts: res.items
      },
  }
}