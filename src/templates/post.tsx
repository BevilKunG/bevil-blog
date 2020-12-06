import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

interface PostProp {
  data: any
}

const Post: FC<PostProp> = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout>
      <div className="container">
        <article className="content">
          {post.feature_image ? (
            <figure className="post-feature-image">
              <img src={post.feature_image} alt={post.title} />
            </figure>
          ) : null}

          <section className="post-full-content">
            <h1 className="content-title">{post.title}</h1>

            <section className="content-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
    }
  }
`
