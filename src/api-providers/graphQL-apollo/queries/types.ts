export type GetPokemonsAbility_V2T = {
  pokemon_v2_ability: {
    __typename: 'Pokemon'
    id: string
    name: string
  }[]
}

export type GetPokemonAbility_V2T = {
  pokemon_v2_ability_by_pk: {
    __typename: 'Pokemon'
    id: string
    name: string
  }
}

export type GetVariablesT = Record<string, any>
