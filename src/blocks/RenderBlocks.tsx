import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MediaContentBlock } from './MediaContent/Component'
import { YoutubeVideo } from './YouTubeVideoBlock/Component'
import { MediaContentListBlock } from './MediaContentList/Component'
import { MCButtonBlock } from './MCButton/Component'
import { MCBBlock } from './MCBBlock/Component'

const blockComponents: Record<string, React.FC<{ disableInnerContainer?: boolean } & any>> = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  mediaContentBlock: MediaContentBlock,
  youtubeVideoBlock: YoutubeVideo,
  mCListBlock: MediaContentListBlock,
  mCButtonBlock: MCButtonBlock,
  mCBBlock: MCBBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
