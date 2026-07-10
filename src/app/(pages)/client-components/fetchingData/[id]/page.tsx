import { TypicodePostT } from '@/types/primary'
import fetchApi from '@/utils/fetchApi'
import { Loader } from '@/components'
import { environments } from '@/configuration'

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const url = `${environments.typicodePosts}/${Number(id)}`
  const posts: TypicodePostT | undefined = await fetchApi.externalApi(url, {
    method: 'GET',
  })

  return (
    <section>
      <h4>fetch Api Data - detail</h4>
      <pre>
        <ul className="hasOutline">
          <li>
            <em>
              <strong>async </strong>
            </em>
            function PostDetailPage(&#123; <strong>params</strong> &#125;: &#123; params:
            Promise&lt;&#123; id: string &#125;&gt; &#125;) &#125;
          </li>
          <li>
            &nbsp;const &#123; id &#125; = <em>await</em> <strong>params</strong>
          </li>
          <li>&nbsp;const posts: TypicodePostT | undefined = await fetchApi.externalApi(url)</li>
          <li>&#125;)</li>
        </ul>
      </pre>

      {posts ? (
        <div>
          <label>Title:</label>
          <h4>{posts?.title}</h4>
          <label>Description:</label>
          <p>{posts?.body}</p>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  )
}
