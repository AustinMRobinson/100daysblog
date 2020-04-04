import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const Thumbnail = styled(Img)`
width: 100%;
border-radius: 0.5rem;
box-shadow: 12px 4px 40px var(--transparent1);
transition: 0.3s all ease-in-out;
`

const Excerpt = styled.p`
color: var(--foreground2);
transition: 0.3s all ease-in-out;
margin: 0.5rem 0 2rem 0;
@media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
}
`

const PostInfo = styled.p`
color: var(--foreground2);
font-size: 0.9rem;
transition: 0.3s all ease-in-out;
margin-bottom: 0;
display: ${props => props.postinfo === 'none' ? 'none' : 'block'};
`

const StyledPost = styled(Link)`
color: inherit;
text-decoration: none;
h3 {
    transition: 0.3s all ease-in-out;
    margin-bottom: 0.75rem;
    font-size: ${props => props.size === 'small' ? '1.5rem' : '2rem'};
    line-height: ${props => props.size === 'small' ? '1.75rem' : '2.125rem'}
}
&:hover {
    h3 {
        color: var(--accent);
    }
    img {
        box-shadow: 12px 4px 48px var(--transparent2);
    }
}
`

const Post = (props) => {
    return (
        <StyledPost to={props.to} key={props.key} size={props.size}>
            <Thumbnail fluid={props.fluid} draggable="false"></Thumbnail>
            <h3>{props.title}</h3>
            <Excerpt>{props.excerpt}</Excerpt>
            <PostInfo postinfo={props.postinfo}>{props.date} • {props.read} min read</PostInfo>
        </StyledPost>
    )
}

export default Post