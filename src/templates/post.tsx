import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { Layout, PostContent } from '../components'
import styled from 'styled-components'

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

  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto px-16">
          <article className="mx-auto text-xl">
            {post.feature_image ? (
              <FeatureImage>
                <img src={post.feature_image} alt={post.title} className="w-full mb-12 object-cover" />
              </FeatureImage>
            ) : null}

            <section className="max-w-screen-md mx-auto bg-white">
              <h1 className="text-7xl mb-4">{post.title}</h1>

              <PostContent>
                <section className="content-body" dangerouslySetInnerHTML={{ __html: post.html }} />
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
    }
  }
`
