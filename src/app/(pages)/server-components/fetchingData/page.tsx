import { fetchExternalApi } from '@/utils/externalApi'
import { TypicodePostT } from '@/types/primary'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { query } from '@/api-providers/graphQL-apollo/apollo-server-provider'
import { Loader } from '@/components'

export default async function ServerFetchingDataPage() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=3'
  const posts: TypicodePostT[] | undefined = await fetchExternalApi(url, {
    method: 'GET',
  })

  const { data } = await query({
    query: GET_POKEMONS_ABILITY_V2,

    variables: {
      offset: 1,
      limit: 5,
      orderBy: [
        {
          name: 'desc',
        },
      ],
    },
  })

  return (
    <>
      <h3>fetch Api Data:</h3>
      <ul>
        <li>
          const fetchExternalApi = async (url: string, requestInit?: RequestInit) =&gt; &#123;
        </li>
        <li>&nbsp;return await fetch(url, requestInit).then((response) =&gt; response.json())</li>
        <li>&#125;</li>
        <li></li>
        <li>
          <strong>
            const posts: TypicodePostT[] | undefined = await fetchExternalApi(url,
            &#123;...requestInit&#125;)
          </strong>
        </li>
      </ul>

      {posts ? (
        <>
          {posts && (
            <ul className="hasTypeDecimal">
              {posts?.map((i) => (
                <li key={i.id}>{i.body}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        'Something wrong.'
      )}

      <h3>GraphQL - Apollo Client:</h3>
      <ul className="hasTypeDisc">
        <li>
          const &#123; data &#125; ={' '}
          <strong>
            <em>await apolloClient.query</em>
          </strong>
          &lt;T&gt;(&#123;query, variables)&#125;
        </li>
        <li>
          Při dotazování na serveru (Server Queries) pomocí Apollo Client v Next.js (App Router)
          proměnnou{' '}
          <strong>
            <em>loading</em>
          </strong>{' '}
          přímo z hooku nezískáte, protože asynchronní operace se chovají na serveru jinak než na
          klientovi. Způsob, jakým se stav načítání řeší, závisí na tom, zda data stahujete v React
          Server Component (RSC) nebo v Klientské komponentě se Server-Side Renderingem (SSR).
        </li>
      </ul>
      {data && (
        <ul className="hasTypeDecimal">
          {data.pokemon_v2_ability?.map((poke) => (
            <li key={poke.id}>{poke.name}</li>
          ))}
        </ul>
      )}

      <h3>Tanstack:</h3>
      <p>
        <strong>
          Bohužel <em>Tanstack</em> neumožňuje uplatnit knihovnu v prostředí <em>'use server'</em>
        </strong>
      </p>
    </>
  )
}
