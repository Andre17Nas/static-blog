import * as S from './styled';
import Link from 'next/link';

export default function PostItem({post}){
    return(
        <S.Item>
            <img src={post.frontmatter.cover_image} alt={post.frontmatter.alt}/>
            <h3>{post.frontmatter.title}</h3>
            <Link href={`/blog/${post.slug}`}>LER MAIS</Link>
        </S.Item>
    )
}

