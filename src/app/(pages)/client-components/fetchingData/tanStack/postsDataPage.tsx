'use client'

import { useQuery } from '@tanstack/react-query'
import { DataRendered, Loader } from '@/components'
import Link from 'next/link'
import { environments } from '@/configuration'
import fetchApi from '@/utils/fetchApi'
import { TypicodePostT } from '@/types/primary'
import { message } from '@/configuration/primary'
import { Suspense } from 'react'

type PostsDataPageProps = {
  hasLink?: {
    link: string
    title: string
  }
}

export const PostsDataPage = ({ hasLink }: PostsDataPageProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: (): Promise<TypicodePostT[] | undefined> =>
      fetchApi.externalApi(`${environments.typicodePosts}?_limit=1`, { method: 'GET' }),
    gcTime: 10,
  })

  return (
    <>
      {(isError && <h5 className="color-is-red">{message.isError}</h5>) ||
        (isLoading && <Loader />)}

      {data && (
        <DataRendered
          HTMLAttributes={{ cover: 'ul', content: 'li' }}
          name={'posts-data'}
          data={data}
          renderData={(post) => (
            <>
              <label>Title:</label>
              <h5>{post.title}</h5>
              <label>Description:</label>
              <p>{post.body}</p>
              {hasLink && (
                <Link href={`${hasLink.link}${post.id}`} style={{ color: 'blue' }}>
                  {hasLink.title}
                </Link>
              )}
            </>
          )}
        />
      )}
    </>
  )
}
