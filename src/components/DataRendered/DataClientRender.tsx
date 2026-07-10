import React, { ReactNode, use } from 'react'
import { DataRenderedProps } from '@/components'

/**
 * Client Components:
 * https://nextjs.org/docs/app/getting-started/fetching-data
 * The use() hook is a unique React API because it can be used in both Server Components and Client Components, but what you can pass into it changes depending on where it runs.
 */

type PostsDataApiProps<T> = Omit<DataRenderedProps<T>, 'data' | 'renderData' | 'classesNames'> & {
  classesName?: string
  dataPromise: Promise<T[]>
  renderData: (item: T) => ReactNode
}

export function DataClientRender<T>({
  classesName,
  name,
  HTMLAttributes,
  dataPromise,
  renderData,
}: PostsDataApiProps<T>) {
  const HTMLCoverAttr = HTMLAttributes
  const HTMLContentAttr = HTMLAttributes

  const data = use(dataPromise)

  return (
    <>
      {data && (
        <HTMLCoverAttr.cover className={classesName}>
          {data?.map((item, idx: number) => (
            <HTMLContentAttr.content key={`${name}-${idx}`}>
              {renderData(item)}
            </HTMLContentAttr.content>
          ))}
        </HTMLCoverAttr.cover>
      )}
    </>
  )
}
