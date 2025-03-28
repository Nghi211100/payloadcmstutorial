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
    <div className="px-2.5 md:px-0 container-custom">
      <RichText
        data={title}
        className="text-primary prose-h1:font-semibold prose-h1:text-[40px] pb-5 md:pb-6 prose-h1:text-2xl lg:prose-h1:text-[40px]"
      />
      <div
        className="lg:grid gap-4 space-y-4 lg:space-y-0"
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
                'flex flex-col items-center gap-2 text-center sm:text-left',
                align?.includes('horizontal') ? 'flex-col' : 'md:flex-row',
                align === 'content-media' || align === 'horizontal-content-media'
                  ? 'flex-row-reverse'
                  : 'flex-row',
              )}
            >
              {media && (
                <div
                  className={clsx(
                    ['content-media', 'media-content'].includes(align)
                      ? 'min-w-[150px] lg:w-[30%] w-[20%]'
                      : 'w-full',
                  )}
                >
                  <Media resource={media} className="w-full h-auto object-cover" />
                </div>
              )}
              <div
                className={clsx(
                  ['content-media', 'media-content'].includes(align)
                    ? 'w-full sm:w-[70%]'
                    : 'w-full',
                )}
              >
                <RichText
                  data={content}
                  className={clsx(
                    'leading-relaxed text-[#666] prose-p:m-1 prose-p:text-sm md:prose-p:text-base',
                    'prose-h4:text-secondary prose-h4:text-base md:prose-h4:text-lg prose-h4:m-0 md:prose-h4:mb-2',
                  )}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
