import React, { FC } from 'react'
import { navigate } from 'gatsby'

interface CardProp {
  post: any
}

const Card: FC<CardProp> = ({ post }) => {
  const onCardClick = () => {
    navigate(post.slug)
  }

  return (
    <div
      className="rounded-lg shadow-lg cursor-pointer hover:opacity-80"
      onClick={onCardClick}
    >
      <img
        src={post.feature_image}
        alt={post.title}
        className="object-cover rounded-t-lg"
      />

      <div className="h-32 flex flex-col justify-center pl-8">
        <div>
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <p className="text-md mt-1">{post.excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
