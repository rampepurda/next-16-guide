import React, { HTMLAttributes, ReactNode } from 'react'
import { HTMLBodyAttrT } from '@/types/primary'

export type DataRenderedProps<T> = HTMLAttributes<HTMLBodyElement> & {
  HTMLAttributes: {
    cover: HTMLBodyAttrT
    content: HTMLBodyAttrT
  }
  classesNames?: string
  name: string
  data: T[] | undefined
  renderData: (item: T) => ReactNode
}

export const DataRendered = <T,>({
  HTMLAttributes,
  classesNames,
  renderData,
  data,
  name,
}: DataRenderedProps<T>) => {
  const HTMLCoverAttr = HTMLAttributes
  const HTMLContentAttr = HTMLAttributes

  return (
    <HTMLCoverAttr.cover className={classesNames}>
      {data?.map((item, idx: number) => (
        <HTMLContentAttr.content key={`${name}-${idx}`}>{renderData(item)}</HTMLContentAttr.content>
      ))}
    </HTMLCoverAttr.cover>
  )
}
