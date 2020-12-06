import React, { FC } from 'react'
import { graphql } from 'gatsby'

interface PostProp {
  data: any
}

const Post: FC<PostProp> = ({ data }) => {
  const post = data.ghostPost
  return (
    <>
      <article className="mx-5">
        {post.feature_image ? (
          <img src={post.feature_image} alt={post.title} />
        ) : null}
        <h1>{post.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </>
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
