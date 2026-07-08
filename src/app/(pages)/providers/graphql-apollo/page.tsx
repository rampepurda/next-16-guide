'use client'

import { useQuery } from '@apollo/client/react'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { DataRendered, Loader } from '@/components'
import { ExternalLink } from '@/components/UI'
import Link from 'next/link'

export default function GraphQLApolloPage() {
  const { data, loading } = useQuery(GET_POKEMONS_ABILITY_V2, {
    variables: {
      offset: 5,
      limit: 7,
      orderBy: [
        {
          name: 'asc',
        },
      ],
    },
  })

  return (
    <div>
      <h2>
        Typescript with Apollo Client v4+&nbsp;
        <mark className="bg-color-is-orange">new</mark>
      </h2>

      <section>
        <ul>
          <li>
            <p>
              Message <span className="bg-color-is-red bg-rounded-size-4">deprecated</span>: Tato
              hláška se vyskutuje při použití:&nbsp;
              <strong>.query, useQuery</strong>
            </p>
          </li>
          <li>
            Nově je nutno otypovat přímo gql parametry: &nbsp;
            <ExternalLink
              url={'https://www.apollographql.com/docs/react/data/typescript'}
              title={' Více zde'}
            />
            &nbsp;anebo mrkni přímo do: api-providers/graphQL-apollo/pokemonQuery
          </li>
          <li>
            <h5>Použití v Next:</h5>
            <ul>
              <li>
                use client: <strong>useQuery</strong>
              </li>
              <li>
                use server: <strong>.query</strong>
              </li>
            </ul>
          </li>
        </ul>

        {loading && <Loader />}
        {data?.pokemon_v2_ability && (
          <DataRendered
            classesNames={'hasTypeDecimal'}
            name={'typeCodePosts'}
            data={data.pokemon_v2_ability}
            HTMLAttributes={{ cover: 'ul', content: 'li' }}
            renderData={(poke) => <Link href={`graphql-apollo/${poke.id}`}>{poke.name}</Link>}
          />
        )}
      </section>
    </div>
  )
}
