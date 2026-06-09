'use client'

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchExternalApi = async (url: string, requestInit?: RequestInit) => {
  return await fetch(url, requestInit).then((response) => response.json())
}

export type TodoT = {
  title: number
  id: number | string
  userId: number | string
  body?: string
}
export default function ApiDataPage() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const { data, isError, isLoading } = useQuery({
    queryKey: ['typiCode'],
    queryFn: (): Promise<TodoT[] | undefined> =>
      fetchExternalApi(`https://jsonplaceholder.typicode.com/posts?_limit=5`, { method: 'GET' }),
    enabled: isEnabled,
  })

  return (
    <>
      <h2>Hello, Im ApiData Page</h2>
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
