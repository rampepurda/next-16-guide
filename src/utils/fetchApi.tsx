class FetchApi {
  externalApi = async (url: string, requestInit?: RequestInit) => {
    return await fetch(url, requestInit).then((response) => response.json())
  }
}

const fetchApi = new FetchApi()
export default fetchApi
