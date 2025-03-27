'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import clsx from 'clsx'

export const HomeHero: React.FC<Page['hero']> = ({
  banner,
  buttonText,
  selectLinkBox,
  media,
  richText,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <div className={clsx(!media ? 'bg-primary' : 'xl:container')}>
      <div
        className={clsx(
          'relative flex items-center justify-center text-white',
          media && 'max-h-[81.5vh] h-[55.3vw]',
        )}
      >
        {media && typeof media === 'object' && (
          <Media
            fill
            className="-z-10 object-cover w-full h-full absolute inset-0"
            priority
            resource={media}
          />
        )}

        {/* Content */}
        <div className={'container z-0 relative flex flex-col items-center'}>
          {richText && (
            <RichText
              className="mb-3 xl:prose-h1:text-[80px] prose-h1:text-[6vw] lg:prose-h2:text-[40px] prose-h2:text-[3vw] prose-h2:mt-3"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(selectLinkBox) && selectLinkBox.length > 0 && (
            <div className="w-[200px] md:w-[240px] lg:w-[300px]">
              <Select>
                <SelectTrigger className="bg-transparent text-base md:text-lg lg:text-2xl justify-center rounded-3xl p-4 lg:p-6 border-neutral-500">
                  <SelectValue placeholder="- Select Location -" />
                </SelectTrigger>
                <SelectContent>
                  {selectLinkBox.map(({ link }, i) => (
                    <SelectItem
                      key={i}
                      value={link.label || `Option ${i + 1}`}
                      className="justify-center pr-1"
                    >
                      {link.label || `Option ${i + 1}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          {buttonText && (
            <div className="mt-2 lg:mt-4">
              <button className="lg:py-2.5 py-1.5 px-6 lg:px-12 bg-secondary text-white rounded-xl font-semibold text-sm">
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Banner */}
      {banner && <Media resource={banner} priority className="-z-10 object-cover w-full h-full" />}
    </div>
  )
}
