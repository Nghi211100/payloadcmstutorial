'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import cn from 'classnames'
import { MediaContentBlock as MediaContentBlockType } from '@/payload-types'

export const MediaContentBlock: React.FC<MediaContentBlockType> = ({ mediaContent }) => {
  const { media, content, align } = mediaContent

  return (
    <div
      className={cn(
        'container flex items-center gap-8',
        align?.includes('horizontal') ? 'flex-col' : 'md:flex-row',
        align === 'content-media' || align === 'horizontal-content-media'
          ? 'flex-row-reverse'
          : 'flex-row',
      )}
    >
      {media && (
        <div className="md:w-2/5">
          <Media resource={media} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="md:w-3/5">
        <RichText
          data={content}
          className="leading-relaxed prose-h1:!font-semibold prose-h1:!text-primary !text-black"
        />
      </div>
    </div>
  )
}
