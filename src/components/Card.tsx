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
    <div className="rounded-lg shadow-lg cursor-pointer" onClick={onCardClick}>
      <img
        src={post.feature_image}
        alt={post.title}
        className="object-cover rounded-t-lg"
      />

      <div className="px-6 py-10">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <p className="text-md font-medium">{post.primary_author.name}</p>
      </div>
    </div>
  )
}

export default Card
