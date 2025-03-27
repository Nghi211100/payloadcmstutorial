import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import Image from 'next/image'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as Footer

  const navItems = footerData?.navItems || []
  const reference = footerData?.reference
  const linksRow = footerData?.linksRow || []
  const footerText = footerData?.footerText || ''
  const socialLinks = footerData?.socialLinks || []
  const sticker = footerData?.sticker

  return (
    <footer className="mt-auto bg-primary text-white">
      {/* Sticker */}
      {sticker?.image && typeof sticker.image !== 'number' && sticker.image?.url && (
        <div className="flex justify-center items-center py-4 bg-white">
          <Image
            src={sticker.image.url}
            alt="Sticker"
            width={400}
            height={120}
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      )}

      {/* Links Row */}
      <div className="flex flex-col md:flex-row md:gap-10 items-center px-4 md:px-6 xl:container py-4">
        <div>
          <CMSLink
            className="text-white font-bold text-sm h-max border-white text-[13px]"
            {...linksRow[0]?.link}
          />
        </div>
        <div className="flex items-center py-4">
          {linksRow.map(({ link }, i) => (
            <CMSLink
              className="text-white font-bold text-sm first:hidden border-r-2 h-max border-white text-[13px] px-2 last:border-0 first:border-r-0"
              {...link}
              key={i}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-secondary border-t-2"></div>

      {/* Main Footer Content */}
      <div className="lg:flex justify-between px-4 md:px-6 xl:container py-6 space-y-4">
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:w-4/6">
          {navItems.map(({ link, children }, i) => {
            return (
              <div key={i} className="">
                <div>
                  <CMSLink
                    className="text-secondary uppercase font-bold text-base md:text-lg"
                    {...link}
                  />
                </div>
                <div>
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
          <div className="flex flex-col w-max">
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
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center container py-2  text-[13px]">
        <p className="text-white text-center md:text-left">{footerText}</p>
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
