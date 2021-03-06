import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PagePost({frontmatter, slug, content}){
    return(
        <div>
            <main>
            <h1>{frontmatter.title} </h1>
            <div dangerouslySetInnerHTML={{__html: marked(content)}}>

            </div>
            </main>
        </div>
    )
}


export async function getStaticPaths(){

    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    console.log(paths)

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params: {slug}}){

    const markDownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markDownWithMeta)

    return {
        props: {
            frontmatter, 
            slug, 
            content
        },
    }
}

