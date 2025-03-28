'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { MCBBlock as MCBBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import clsx from 'clsx'

export const MCBBlock: React.FC<MCBBlockType> = ({ MCB }) => {
  const { media, item, align } = MCB

  return (
    <div
      className={clsx(
        'container-custom flex flex-col md:flex-row items-center gap-4 pb-6 md:pb-0',
        align === 'content-media' ? 'flex-row-reverse' : 'flex-row',
      )}
    >
      {media && (
        <div className="w-full md:w-2/3">
          <Media resource={media} className="w-full h-auto object-cover" />
        </div>
      )}
      <div className="md:w-1/3 px-2.5 md:px-0">
        <RichText
          data={item.content}
          className={clsx(
            'leading-relaxed !text-black ',
            'prose-h1:font-bold prose-h1:leading-[50px] prose-h1:mb-1 md:prose-h1:mb-10',
            'prose-h1:text-primary prose-h1:text-2xl md:prose-h1:text-4xl',
            'prose-p:text-sm md:prose-p:text-base prose-p:mt-0 md:prose-p:mt-2',
          )}
        />
        <div className="upcase font-semibold bg-secondary text-white px-4 py-2 rounded-xl w-max mx-auto mt-4 md:mt-6 text-sm md:text-base">
          <CMSLink {...item.link} />
        </div>
      </div>
    </div>
  )
}
