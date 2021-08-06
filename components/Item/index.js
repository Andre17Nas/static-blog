import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';

export default function PostItem({post}){
    return(
        <S.Item>
            <S.ImageStyled src={post.frontmatter.cover_image} layout='responsive'
                width={288} height={150} 
            />
            <h3>{post.frontmatter.title}</h3>
            <Link href={`/blog/${post.slug}`}>LER MAIS</Link>
        </S.Item>
    )
}

