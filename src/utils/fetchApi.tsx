class FetchApi {
  externalApi = async (url: string, requestInit?: RequestInit) => {
    return await fetch(url, requestInit).then((response) => response.json())
  }
  getDataClient<T>(dataPromise: Promise<T[]> | null = null, url: string) {
    if (!dataPromise) {
      dataPromise = fetch(url).then((res) => res.json())
    }
    return dataPromise
  }
}

const fetchApi = new FetchApi()
export default fetchApi
