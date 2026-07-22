'use client'

import { useQuery } from '@apollo/client/react'
import { GET_POKEMON_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { useParams } from 'next/navigation'
import { Loader } from '@/components'

export default function PokemonDetailPage() {
  const params = useParams()
  const { data, loading } = useQuery(GET_POKEMON_ABILITY_V2, {
    variables: {
      pokemonV2AbilityByPkId: Number(params.id),
    },
  })

  return (
    <>
      <h3 className="color-is-gray">GraphQL & Apollo: Dynamic Segments</h3>
      <ul className="hasOutline pre">
        <li>
          <strong>const params = useParams()</strong>
        </li>
        <li>const &#123; data, loading &#125; = useQuery(GET_POKEMON_ABILITY_V2, &#123;</li>
        <li>&nbsp;variables: &#123;</li>
        <li>
          &nbsp;&nbsp;pokemonV2AbilityByPkId: Number(<strong>params.id</strong>)
        </li>
        <li>&nbsp;&#125;</li>
        <li>&#125;)</li>
      </ul>

      {loading && <Loader />}
      {data?.pokemon_v2_ability_by_pk && (
        <>
          <h4>Pokemon Detail</h4>
          <label>Name:</label>
          <h2>{data.pokemon_v2_ability_by_pk.name}</h2>
        </>
      )}
    </>
  )
}
