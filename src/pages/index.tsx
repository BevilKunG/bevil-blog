import React, { FC } from 'react'
import { Layout, HighlightCard } from '../components'
import { graphql } from 'gatsby'

interface IndexProp {
  data: any
}

const Index: FC<IndexProp> = ({ data }) => {
  const { allGhostPost } = data
  const highlightPost = allGhostPost.edges[0]

  return (
    <Layout>
      <HighlightCard post={highlightPost.node} />
    </Layout>
  )
}

export default Index

export const postsQuery = graphql`
  query {
    allGhostPost(sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          id
          title
          feature_image
          published_at
          slug
          primary_author {
            id
            name
          }
        }
      }
    }
  }
`
