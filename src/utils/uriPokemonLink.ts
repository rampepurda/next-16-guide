import { HttpLink } from '@apollo/client'

export const uriPokemonApi = new HttpLink({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  //headers: {} // You can pass headers or custom fetch options here
})
