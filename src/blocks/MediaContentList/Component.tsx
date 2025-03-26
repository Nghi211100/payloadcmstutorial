'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { MCListBlock as MCListBlockType } from '@/payload-types'
import clsx from 'clsx'

const exchangeGridCols = {
  ['cols-2']: '2',
  ['cols-3']: '3',
  ['cols-4']: '4',
}

export const MediaContentListBlock: React.FC<MCListBlockType> = (props) => {
  const { items, title, gridCols } = props.list

  return (
    <div className="container">
      <RichText
        data={title}
        className="text-primary prose-h1:font-semibold prose-h1:text-[40px] pb-6"
      />
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${exchangeGridCols[gridCols as keyof typeof exchangeGridCols]}, 1fr)`,
        }}
      >
        {items?.map((item, index) => {
          const { media, content, align } = item

          return (
            <div
              key={index}
              className={clsx(
                'flex items-center gap-2',
                align?.includes('horizontal') ? 'flex-col' : 'md:flex-row',
                align === 'content-media' || align === 'horizontal-content-media'
                  ? 'flex-row-reverse'
                  : 'flex-row',
              )}
            >
              {media && (
                <div
                  className={clsx(
                    ['content-media', 'media-content'].includes(align) ? 'w-[30%]' : 'w-full',
                  )}
                >
                  <Media resource={media} className="w-full h-auto object-cover" />
                </div>
              )}
              <div
                className={clsx(
                  ['content-media', 'media-content'].includes(align) ? 'w-[70%]' : 'w-full',
                )}
              >
                <RichText
                  data={content}
                  className="leading-relaxed prose-h4:text-secondary text-[#666] prose-p:m-1"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
