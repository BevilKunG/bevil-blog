import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { Layout, PostContent } from '../components'
import styled from 'styled-components'
import { DateTime } from 'luxon'

interface PostProp {
  data: any
}

const FeatureImage = styled.figure`
  & img {
    height: 500px;
  }
`

const Post: FC<PostProp> = ({ data }) => {
  const post = data.ghostPost

  const publishedAt = DateTime.fromISO(post.published_at).toLocaleString(
    DateTime.DATE_MED
  )

  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto px-16">
        <article className="mx-auto">
          {post.feature_image ? (
            <FeatureImage>
              <img
                src={post.feature_image}
                alt={post.title}
                className="w-full mb-12 object-cover"
              />
            </FeatureImage>
          ) : null}

          <section className="max-w-screen-md mx-auto bg-white">
            <div className="mb-10">
              <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
              <p className="">{publishedAt}</p>
            </div>

            <PostContent className="text-xl">
              <section
                className="content-body"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </PostContent>
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
      published_at
    }
  }
`
