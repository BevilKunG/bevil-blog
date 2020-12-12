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

      <div className="px-16 mt-14">
        <h1 className="text-gray-900 text-3xl font-bold">Story</h1>
      </div>
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
