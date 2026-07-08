import fetchApi from '@/utils/fetchApi'
import { TypicodePostT } from '@/types/primary'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { query } from '@/api-providers/graphQL-apollo/apollo-server-provider'
import { DataRendered } from '@/components'

export default async function ServerFetchingDataPage() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=3'
  const posts: TypicodePostT[] | undefined = await fetchApi.externalApi(url, {
    method: 'GET',
  })

  const { data, error } = await query({
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
      <h3>1. fetch Api Data:</h3>
      <ul>
        <li>
          const fetchExternalApi = async (url: string, requestInit?: RequestInit) =&gt; &#123;
        </li>
        <li>&nbsp;return await fetch(url, requestInit).then((response) =&gt; response.json())</li>
        <li>&#125;</li>
        <li>
          <strong>
            const posts: TypicodePostT[] | undefined = await fetchExternalApi(url,
            &#123;...requestInit&#125;)
          </strong>
        </li>
      </ul>

      {posts ? (
        <DataRendered
          classesNames={'hasTypeDecimal'}
          name={'typeCodePosts'}
          data={posts}
          HTMLAttributes={{ cover: 'ul', content: 'li' }}
          renderData={(post) => <span>{post.body}</span>}
        />
      ) : (
        'Something wrong.'
      )}

      <h3>2. GraphQL - Apollo Client:</h3>
      <ul className="hasTypeDisc">
        <li>
          Pro 'server', jakožto default v Next JS je nutno vytvořit PROVIDERa, protože
          GraphQL-ApolloClient je def 'use client'. Viz: &nbsp;
          <strong>
            <em>apollo-server-provider</em>
          </strong>
          <ul>
            <li>
              export const &#123; getClient, <strong>query</strong>, PreloadQuery &#125; =
              registerApolloClient(() =&gt; &#123;
            </li>
            <li>&nbsp;return new ApolloClient(&#123;</li>
            <li>&nbsp;&nbsp;link: uriPokemonApi,</li>
            <li>&nbsp;&nbsp;cache: new InMemoryCache(),</li>
            <li>&nbsp;&#125;)</li>
            <li>&#125;)</li>
          </ul>
        </li>
        <li>
          const &#123; data &#125; =&nbsp;
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

      {error ? (
        <span>{error.message}</span>
      ) : (
        <>
          {data && (
            <DataRendered
              classesNames={'hasTypeDecimal'}
              name={'Pokemon'}
              data={data.pokemon_v2_ability}
              HTMLAttributes={{ cover: 'ul', content: 'li' }}
              renderData={(pokemon) => <span>{pokemon.name}</span>}
            />
          )}
        </>
      )}

      <h3>3. Tanstack:</h3>
      <p>
        <span className="bg-color-is-red bg-rounded-size-4">
          Bohužel <em>Tanstack</em> neumožňuje uplatnit knihovnu v prostředí <em>'use server'</em>
        </span>
      </p>
    </>
  )
}
