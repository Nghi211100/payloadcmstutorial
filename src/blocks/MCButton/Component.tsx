'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { MCButtonBlock as MCButtonType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import clsx from 'clsx'

export const MCButtonBlock: React.FC<MCButtonType> = ({ list }) => {
  const { items, title, link } = list

  return (
    <div className="container-custom">
      <div className="px-[4%] py-[30px] bg-[#00a7e1]">
        <p className="text-center pb-[30px] text-white font-semibold text-2xl md:text-[40px]">
          {title}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-[30px] gap-4 lg:gap-8 xl:gap-12">
          {items?.map((item, index) => {
            const { media, content, align } = item

            return (
              <div
                key={index}
                className={clsx(
                  'flex items-center gap-2.5',
                  align?.includes('horizontal') ? 'flex-col' : 'md:flex-row',
                  align === 'content-media' || align === 'horizontal-content-media'
                    ? 'flex-row-reverse'
                    : 'flex-row',
                )}
              >
                {media && (
                  <Media
                    resource={media}
                    className="mx-auto w-full object-cover rounded-xl overflow-hidden"
                  />
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
        <div className="px-6 py-2 md:px-10 md:py-3 bg-secondary rounded-xl w-max mx-auto text-white uppercase font-semibold text-sm md:text-base">
          <CMSLink {...link} />
        </div>
      </div>
    </div>
  )
}
