export const fetchExternalApi = async (url: string, requestInit?: RequestInit) => {
  return await fetch(url, requestInit).then((response) => response.json())
}
