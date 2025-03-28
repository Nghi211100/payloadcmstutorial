import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import Image from 'next/image'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import ShortCutLinks from './ShortCutLinks'
import { Media } from '@/components/Media'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as Footer

  const navItems = footerData?.navItems || []
  const reference = footerData?.reference
  const shortCutLinks = footerData?.shortCutLinks
  const footerText = footerData?.footerText || ''
  const socialLinks = footerData?.socialLinks || []
  const sticker = footerData?.sticker

  return (
    <footer className="mt-auto bg-primary text-white ">
      {/* Sticker */}
      {sticker?.image && typeof sticker.image !== 'number' && sticker.image?.url && (
        <div className="flex justify-center items-center py-1 md:py-4 bg-white relative">
          <Media resource={sticker.image} className="w-[200px] sm:w-[400px] h-auto" />
        </div>
      )}

      {/* ShortCutLinks */}
      <ShortCutLinks shortCutLinks={shortCutLinks} />

      {/* Divider */}
      <div className="border-secondary border-t-2"></div>

      {/* Main Footer Content */}
      <div className="lg:flex justify-between px-2.5 md:px-6 py-6 space-y-4 w-full">
        <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full xl:w-4/6">
          {navItems.map(({ link, children }, i) => {
            return (
              <div key={i} className="space-y-3">
                <div>
                  <CMSLink
                    className="text-secondary uppercase font-bold text-base md:text-lg"
                    {...link}
                  />
                </div>
                <div className="-space-y-1">
                  {children?.map(({ link }, i) => {
                    return (
                      <div key={i}>
                        <CMSLink className="text-white text-xs md:text-sm" {...link} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </nav>

        {reference?.image && (
          <div className="flex flex-col w-max space-y-2">
            {reference.title && (
              <p className="uppercase text-secondary font-bold text-base md:text-lg">
                {reference.title}
              </p>
            )}
            {typeof reference.image !== 'number' && reference.image?.url && (
              <Image
                src={reference.image.url}
                alt={reference.title || 'Custom Field'}
                width={200} // Adjust width as needed
                height={46} // Adjust height as needed
                className="custom-field-image w-[200px] h-auto"
              />
            )}
          </div>
        )}
      </div>

      {/* Footer Text and Social Links */}
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center container py-2 px-2.5 text-[13px]">
        <p className="text-white text-left tracking-wider font-normal">{footerText}</p>
        <div className="flex items-center gap-1">
          <p className="text-white">Find us on: </p>
          {socialLinks.map(({ icon, url }, i) => (
            <a
              key={i}
              href={url || '/'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              {typeof icon !== 'number' && icon?.url && (
                <Image
                  src={icon.url}
                  alt={`Social Link ${i + 1}`}
                  width={15}
                  height={15}
                  className="w-3.5 h-3.5"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
