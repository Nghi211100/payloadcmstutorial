'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'

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
    <div className="container">
      <div className="relative flex items-center justify-center text-white min-h-[80vh]">
        {media && typeof media === 'object' && (
          <Media
            fill
            className="-z-10 object-cover w-full h-full absolute inset-0"
            priority
            resource={media}
          />
        )}

        {/* Content */}
        <div className="container z-10 relative flex flex-col items-center text-center">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(selectLinkBox) && selectLinkBox.length > 0 && (
            <div className="w-[274px] max-w-xs">
              <Select>
                <SelectTrigger className="bg-transparent text-2xl justify-center rounded-3xl p-6 border-neutral-500">
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
            <div className="mt-4">
              <button className="py-2.5 px-12 bg-secondary text-white rounded-xl font-semibold text-sm">
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Banner */}
      <div>
        <Media resource={banner} priority className="-z-10 object-cover w-full h-full" />
      </div>
    </div>
  )
}
