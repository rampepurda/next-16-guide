import fetchApi from '@/utils/fetchApi'
import { TypicodePostT } from '@/types/primary'
import { environments } from '@/configuration'

class FetchUseApi {
  typiCodePosts: Promise<TypicodePostT[] | undefined> = fetchApi.externalApi(
    `${environments.typicodePosts}?_limit=2`
  )
}

const fetchUseApi = new FetchUseApi()
export default fetchUseApi
