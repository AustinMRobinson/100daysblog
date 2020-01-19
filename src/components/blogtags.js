import React from 'react'
import styled from '@emotion/styled'
import { Link, useStaticQuery } from 'gatsby';

import kebabCase from "lodash/kebabCase"


const Tags = styled.div`
  display: flex;
`

const Count = styled.p`
  color: var(--foreground3);
  border-left: 1px solid var(--eventransparent);
  padding-left: 6px;
  margin: 0 0 0 6px;
  transition: 0.3s all ease-in-out;
`

const Tag = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 8px;
  color: var(--foreground2);
  background: var(--eventransparent);
  margin-right: 12px;
  text-decoration: none;
  transition: 0.3s all ease-in-out;
  &:hover {
    color: var(--foreground0);
    background: var(--eventransparent1);
    ${Count} {
      color: var(--foreground0);
      border-left: 1px solid var(--eventransparent);
    }
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
                    totalCount
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
                  <Count>{tag.totalCount}</Count>
                </Tag>
            ))}
        </Tags>
    )
}

export default BlogTags