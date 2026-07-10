'use client'

import { useQuery } from '@apollo/client/react'
import { GET_POKEMON_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { useParams } from 'next/navigation'
import { Loader } from '@/components'

export default function PokemonDetailPage() {
  const params = useParams()
  const { data, error, loading } = useQuery(GET_POKEMON_ABILITY_V2, {
    variables: {
      pokemonV2AbilityByPkId: Number(params.id),
    },
  })

  return (
    <>
      <ul>
        <li>
          <strong>'use client'</strong>
          <ul>
            <li>const params = useParams()</li>
            <li>
              const &#123; data, error, loading &#125; = <strong>useQuery</strong>
              (GET_POKEMON_ABILITY_V2, &#123;
            </li>
            <li>&nbsp;variables: &#123;</li>
            <li>&nbsp;&nbsp;pokemonV2AbilityByPkId: Number(params.id),</li>
            <li>&nbsp; &#125;,</li>
            <li>&#125;)</li>
          </ul>
        </li>
      </ul>

      {loading && <Loader />}
      {data?.pokemon_v2_ability_by_pk && (
        <>
          <h3>Pokemon Detail</h3>
          <label>Name:</label>
          <h2>{data.pokemon_v2_ability_by_pk.name}</h2>
        </>
      )}
    </>
  )
}
