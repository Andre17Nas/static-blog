import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import GlobalStyles from '../../styles/createGlobalStyles'
/*
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

export default function PagePost({frontmatter, slug, content}){
*/
export default function PagePost({ post }){
    {/*
        return(
        <div>
            <main>
            <h1>{frontmatter.title} </h1>
            <div dangerouslySetInnerHTML={{__html: marked(content)}}>

            </div>
            </main>
        </div>
    )
    */}
    const {title , image } = post.fields
    return(
        <div>
            <GlobalStyles/>
            <main>
            <h1>{title} </h1>
            {documentToReactComponents(post.fields.post)}
            </main>
        </div>
    )
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


export async function getStaticPaths(){

    /*
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    console.log(paths)
    */

    const res = await client.getEntries({
        content_type: 'post'
    })

    const paths = res.items.map(post => {
        return {
            params: { slug: post.fields.slug }
        }
    })


    return {
        paths,
        fallback: false,
    }
}

//export async function getStaticProps({params: {slug}}){
    export async function getStaticProps({params}){
    /*
    
    const markDownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markDownWithMeta)
    
    */

    const {items} = await client.getEntries({
        content_type: 'post',
        'fields.slug': params.slug
    })


    return {
        /*
        props: {
            frontmatter, 
            slug, 
            content
        },
        */
       props:{
           post: items[0],
       }
    }
}

