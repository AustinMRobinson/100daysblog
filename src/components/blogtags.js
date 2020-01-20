import React from 'react'
import styled from '@emotion/styled'
import { Link, useStaticQuery } from 'gatsby';

import kebabCase from "lodash/kebabCase"


const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: .75rem;
  @media only screen and (max-width: 460px) {
    grid-template-columns: repeat(4, auto);
}
`

const Tag = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--foreground2);
  background: var(--eventransparent);
  text-decoration: none;
  transition: 0.3s all ease-in-out;
  &:hover {
    color: var(--foreground0);
    background: var(--eventransparent1);
  }
`

const BlogTags = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                limit: 2000

            ) {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `)

    return (
        <Tags>
            <Tag to="/blog" activeStyle={{ color: "var(--bg)", background: "var(--foreground0)" }}>All Tags</Tag>
            {data.allMarkdownRemark.group.map(tag => (
                <Tag to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue} activeStyle={{ color: "var(--bg)", background: "var(--foreground0)" }}>
                  {tag.fieldValue}
                </Tag>
            ))}
        </Tags>
    )
}

export default BlogTags