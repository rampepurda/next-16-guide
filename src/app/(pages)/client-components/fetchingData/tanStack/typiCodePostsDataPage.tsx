'use client'

import { useQuery } from '@tanstack/react-query'
import { DataGeneric, Loader } from '@/components'
import Link from 'next/link'
import { environments } from '@/configuration'
import fetchApi from '@/utils/fetchApi'
import { TypicodePostT } from '@/types/primary'
import { message } from '@/configuration/primary'

export const TypiCodePostsDataPage = () => {
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
        <DataGeneric
          HTMLAttributes={{ cover: 'ul', content: 'li' }}
          name={'posts-data'}
          data={data}
          renderData={(post) => <Link href={`fetchingData/tanStack/${post.id}`}>{post.title}</Link>}
        />
      )}
    </>
  )
}
