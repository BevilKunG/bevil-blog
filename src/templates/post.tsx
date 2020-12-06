import React, { FC } from 'react'
import { graphql } from 'gatsby'

interface PostProp {
  data: any
}

const Post: FC<PostProp> = ({ data }) => {
  const post = data.ghostPost
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <article className="m-auto text-xl">
        <h1 className="mb-7xl">{post.title}</h1>

        {post.feature_image ? (
          <figure className="mb-12 w-full h-auto object-cover">
            <img src={post.feature_image} alt={post.title} />
          </figure>
        ) : null}

        <section
          className="max-w-screen-md mx-auto bg-white"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
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
