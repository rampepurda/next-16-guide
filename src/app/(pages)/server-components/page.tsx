import { fetchExternalApi } from '@/serverActions/externalApi'
import { TypicodePostT } from '@/types/primary'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { query } from '@/api-providers/graphQL-apollo/apollo-server-provider'

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=3'

export default async function ServerComponentsPage() {
  return (
    <>
      <ul className="hasTypeDisc">
        <li>
          By default, layouts and pages are Server Components, which lets you fetch data and render
          parts of your UI on the server, optionally cache the result, and stream it to the client.
        </li>
        <li>
          When you need interactivity or browser APIs, you can use Client Components to layer in
          functionality.
        </li>
      </ul>
    </>
  )
}
