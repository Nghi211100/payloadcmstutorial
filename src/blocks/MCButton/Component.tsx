'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import cn from 'classnames'
import { MCButtonBlock as MCButtonType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const MCButtonBlock: React.FC<MCButtonType> = ({ list }) => {
  const { items, title, link } = list

  return (
    <div className="container bg-[#00a7e1] py-6">
      <p className="text-[40px] text-center pb-6 text-white font-semibold">{title}</p>
      <div className="grid grid-cols-3 pb-6">
        {items?.map((item, index) => {
          const { media, content, align } = item

          return (
            <div
              key={index}
              className={cn(
                'container flex items-center gap-2.5',
                align?.includes('horizontal') ? 'flex-col' : 'md:flex-row',
                align === 'content-media' || align === 'horizontal-content-media'
                  ? 'flex-row-reverse'
                  : 'flex-row',
              )}
            >
              {media && (
                <div className="">
                  <Media resource={media} className="w-full h-auto object-contain rounded-xl" />
                </div>
              )}
              <div className="">
                <RichText
                  data={content}
                  className="leading-relaxed !text-white prose-p:m-0 prose-strong:text-white prose-a:text-white prose-strong:font-bold"
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className="px-10 py-3 bg-secondary rounded-xl w-max mx-auto text-white uppercase font-semibold">
        <CMSLink {...link} />
      </div>
    </div>
  )
}
