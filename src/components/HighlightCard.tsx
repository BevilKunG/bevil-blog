import React, { FC } from 'react'
import { navigate } from 'gatsby'

interface HighlightCardProp {
  post: any
}

const HighlightCard: FC<HighlightCardProp> = ({ post }) => {
  const onCardClick = () => {
    navigate(post.slug)
  }

  return (
    <div className="w-full h-3/4 relative cursor-pointer" onClick={onCardClick}>
      <img
        src={post.feature_image}
        alt={post.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 bg-gray-800 opacity-80 text-white w-full h-1/6 p-4">
        <div className="pl-32 my-auto">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-xl font-medium">{post.primary_author.name}</p>
        </div>
      </div>
    </div>
  )
}

export default HighlightCard
