'use client'

import { TypicodePostT } from '@/types/primary'
import fetchApi from '@/utils/fetchApi'
import { Loader } from '@/components'
import { environments } from '@/configuration'
import { useQuery } from '@tanstack/react-query'
import { message } from '@/configuration/primary'
import { useParams } from 'next/navigation'

export default function PostDetailPage() {
  const postId = useParams()

  const post = useQuery({
    queryKey: [`post-${postId}`],
    queryFn: (): Promise<TypicodePostT | undefined> =>
      fetchApi.externalApi(`${environments.typicodePosts}/${Number(postId.id)}`, {
        method: 'GET',
      }),
  })

  return (
    <section>
      <h4>Tanstack - Segment Detail</h4>

      <ul className="hasOutline pre">
        <li>function PostDetailPage() &#123;</li>
        <li>
          &nbsp;const &#123; params&#125; = <strong>useParams()</strong>
        </li>
        <li>
          &nbsp;const &#123; postId &#125; = <strong>params</strong>
        </li>
        <li>
          <ul>
            <li>const post = useQuery(&#123;</li>
            <li>&nbsp;queryFn: (): Promise&lt;Type&gt; =&gt;</li>
            <li>&nbsp;&nbsp;fetchApi.externalApi(`url/postId.id)`</li>
            <li>&#125;)</li>
          </ul>
        </li>
      </ul>

      {(post.isLoading && <Loader />) ||
        (post.error && <h3 className="bg-color-is-red, color-is-red">{message.isError}</h3>)}

      {post.data && (
        <div>
          <label>Title:</label>
          <h4>{post.data.title}</h4>
          <label>Description:</label>
          <p>{post.data.body}</p>
        </div>
      )}
    </section>
  )
}
