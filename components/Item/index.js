import * as S from './styled';
import Link from 'next/link';

export default function PostItem({post}){

    const {title, slug, image} = post.fields

    console.log(post)

    return(
        <S.Item>
            <S.ImageStyled src={'https:'+image.fields.file.url} layout='responsive'
                width={288} height={150} 
            />
            <h3>{title}</h3>
            <Link href={`/blog/${slug}`}>LER MAIS</Link>
        </S.Item>
    )
}

