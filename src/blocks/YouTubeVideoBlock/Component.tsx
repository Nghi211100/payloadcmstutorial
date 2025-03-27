'use client'

import { YoutubeVideoBlock } from '@/payload-types'
import React from 'react'

export const YoutubeVideo: React.FC<YoutubeVideoBlock> = (props) => {
  const { youtubeUrl, title, description } = props

  const videoId = youtubeUrl.split('v=')[1]?.split('&')[0]
  return (
    <div className="text-center w-[80vw] max-w-[895px] max-h-[500px] h-[calc(80vw*0.5625)] mx-auto">
      {title && <h2 className="font-bold text-xl">{title}</h2>}
      {description && <p>{description}</p>}
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
}
