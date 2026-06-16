import {
  ApolloClient,
  registerApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs'
import { HttpLink } from '@apollo/client'

export type PokemonT = {
  id: string
  name: string
}

export type TypicodePostT = {
  userId: number
  id: number
  title: string
  body: string
}

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://beta.pokeapi.co/graphql/v1beta',
      // You can pass headers or custom fetch options here
    }),
  })
})
