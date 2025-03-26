'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import cn from 'classnames'
import { MCBBlock as MCBBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const MCBBlock: React.FC<MCBBlockType> = ({ MCB }) => {
  const { media, item, align } = MCB

  return (
    <div
      className={cn(
        'container flex items-center gap-4',
        align === 'content-media' ? 'flex-row-reverse' : 'flex-row',
      )}
    >
      {media && (
        <div className="md:w-2/3">
          <Media resource={media} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="md:w-1/3">
        <RichText
          data={item.content}
          className="leading-relaxed !text-black prose-h1:text-primary prose-h1:font-bold prose-h1:leading-[50px] prose-h1:mb-10"
        />
        <div className="upcase font-semibold bg-secondary text-white px-4 py-2 rounded-xl w-max mx-auto mt-6">
          <CMSLink {...item.link} />
        </div>
      </div>
    </div>
  )
}
