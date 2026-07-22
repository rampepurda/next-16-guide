import fetchApi from '@/utils/fetchApi'
import { TypicodePostT } from '@/types/primary'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { query } from '@/api-providers/graphQL-apollo/apollo-server-provider'
import { DataGeneric } from '@/components'
import Link from 'next/link'
import { environments } from '@/configuration'
import { Divider } from '@/components/UI'

export default async function ServerFetchingDataPage() {
  const posts: TypicodePostT[] | undefined = await fetchApi.externalApi(
    `${environments.typicodePosts}?_limit=1`,
    {
      method: 'GET',
    }
  )

  const { data, error } = await query({
    query: GET_POKEMONS_ABILITY_V2,
    variables: {
      offset: 1,
      limit: 3,
      orderBy: [
        {
          name: 'desc',
        },
      ],
    },
  })

  return (
    <>
      <h3 className="color-is-gray">fetch Api</h3>
      <p className="bg-color-is-darkmagenta bg-rounded-size-4 color-is-white">
        <strong>Použití:</strong> &nbsp; 'use server'
      </p>

      <ul className="hasOutline pre">
        <li>
          <h5>Util:</h5>
          const fetchExternalApi = async (url: string, requestInit?: RequestInit) =&gt; &#123;
        </li>
        <li>&nbsp;return await fetch(url, requestInit).then((response) =&gt; response.json())</li>
        <li>&#125;</li>
        <li>
          <h5>Page:</h5>
          <strong>
            const posts: TypicodePostT[] | undefined = await fetchExternalApi(url,
            &#123;...requestInit&#125;)
          </strong>
          <Divider />
        </li>
        <li>
          <h5>Result:</h5>
          {posts ? (
            <DataGeneric
              name={'typeCodePosts'}
              data={posts}
              HTMLAttributes={{ cover: 'ul', content: 'li' }}
              renderData={(post) => <Link href={`fetchingData/${post.id}`}>{post.body}</Link>}
            />
          ) : (
            'Something wrong.'
          )}
        </li>
      </ul>

      <h3 className="color-is-gray">GraphQL - Apollo Client:</h3>
      <p className="bg-color-is-darkmagenta bg-rounded-size-4 color-is-white">
        <strong>Použití:</strong> &nbsp; 'use server' &nbsp;| &nbsp; 'use client'
      </p>

      <ul className="hasTypeDisc">
        <li>
          <strong>Loading: </strong>
          Při dotazování na serveru (Server Queries) pomocí Apollo Client v Next.js (App Router)
          proměnnou
          <strong>
            <em> loading </em>
          </strong>
          přímo z hooku nezískáte, protože asynchronní operace se chovají na serveru jinak než na
          klientovi. Způsob, jakým se stav načítání řeší, závisí na tom, zda data stahujete v React
          Server Component (RSC) nebo v Klientské komponentě se Server-Side Renderingem (SSR).
        </li>
        <li>
          Pro 'server', jakožto default v Next JS je nutno vytvořit PROVIDERa, protože
          GraphQL-ApolloClient je def 'use client'. Viz: &nbsp;
          <strong>
            <em>apollo-server-provider</em>
          </strong>
          <ul className="hasOutline pre">
            <li className="color-is-grayLight">
              <h5>Apollo Server Provider:</h5>
            </li>
            <li>
              export const &#123; getClient, <strong>query</strong>, PreloadQuery &#125; =
              registerApolloClient(() =&gt; &#123;
            </li>
            <li>&nbsp;return new ApolloClient(&#123;</li>
            <li>&nbsp;&nbsp;link: uriPokemonApi,</li>
            <li>&nbsp;&nbsp;cache: new InMemoryCache(),</li>
            <li>&nbsp;&#125;)</li>
            <li>&#125;)</li>
            <li>
              &nbsp;
              <Divider />
            </li>
            <li>
              <h5>Page:</h5>
              const &#123; data &#125; =&nbsp;
              <strong>
                await <em className="color-is-darkmagenta">query</em>
              </strong>
              (&#123;query: qName, variables:&#123; limit: 10&#125; )&#125;
              <Divider />
            </li>
            <li>
              <h5>Result:</h5>

              {error ? (
                <span>{error.message}</span>
              ) : (
                <>
                  {data && (
                    <DataGeneric
                      classesNames={'hasTypeDecimal'}
                      name={'Pokemon'}
                      data={data.pokemon_v2_ability}
                      HTMLAttributes={{ cover: 'ul', content: 'li' }}
                      renderData={(pokemon) => <span>{pokemon.name}</span>}
                    />
                  )}
                </>
              )}
            </li>
          </ul>
        </li>
      </ul>

      <h3 className="color-is-gray">Tanstack:</h3>
      <p className="bg-color-is-darkmagenta bg-rounded-size-4 color-is-white">
        <strong>Použití:</strong> &nbsp; 'use client'
      </p>
    </>
  )
}
