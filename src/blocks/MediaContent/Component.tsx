'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import clsx from 'clsx'
import { MediaContentBlock as MediaContentBlockType } from '@/payload-types'

export const MediaContentBlock: React.FC<MediaContentBlockType> = ({ mediaContent }) => {
  const { media, content, align } = mediaContent

  return (
    <div
      className={clsx(
        'mx-4 md:mx-6 lg:container flex items-center gap-4 md:gap-6 lg:gap-8',
        align?.includes('horizontal') ? 'flex-col' : 'flex-col md:flex-row',
        align === 'content-media' || align === 'horizontal-content-media'
          ? 'flex-row-reverse'
          : 'flex-row',
      )}
    >
      {media && (
        <div className="w-full md:w-2/5 -mx-4 sm:-mx-2 md:-mx-0">
          <Media resource={media} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="w-full md:w-3/5">
        <RichText
          data={content}
          className={clsx(
            '!text-black',
            'prose-h1:!font-semibold prose-h1:!text-primary prose-h1:text-xl sm:prose-h1:text-2xl lg:prose-h1:text-[40px] prose-h1:!leading-[1.1em]',
            'prose-p:text-sm lg:prose-p:text-base prose-p:mt-2 md:prose-p:mt-4',
          )}
        />
      </div>
    </div>
  )
}
