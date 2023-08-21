const getBackendEndpoint = () => {
  const dev = import.meta.env.DEV
  const prod = ""
  const local = "https://localhost:8080"

  if (dev) return local

  return prod
}

const endpoint = getBackendEndpoint()

export default endpoint
