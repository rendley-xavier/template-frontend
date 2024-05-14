import axios, { type AxiosInstance } from 'axios'

const gateway = process.env.REACT_APP_GATEWAY

const api: AxiosInstance = axios.create({
  baseURL: gateway,
  headers: {
    Accept: 'application/*'
  }
})

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('@esportesuperacao/token')

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
