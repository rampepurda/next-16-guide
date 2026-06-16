'use client'

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { TypicodePostT } from '@/types/primary'
import { fetchExternalApi } from '@/serverActions/externalApi'

export default function ApiDataPage() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const { data, isError, isLoading } = useQuery({
    queryKey: ['typiCode'],
    queryFn: (): Promise<TypicodePostT[] | undefined> =>
      fetchExternalApi(`https://jsonplaceholder.typicode.com/posts?_limit=5`, { method: 'GET' }),
    enabled: isEnabled,
  })

  return (
    <>
      <h2>Tanstack</h2>
      <button onClick={() => setIsEnabled(!isEnabled)} style={{ width: '10%' }}>
        Načti data
      </button>

      {isError && <span>Error</span>}
      {isLoading && <span>...Loading, wait.</span>}
      {data?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  )
}
