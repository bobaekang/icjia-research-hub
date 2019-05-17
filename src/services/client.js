import axios from 'axios'
import NProgress from 'nprogress'
import api from '@/config/api'

const client = axios.create({
  baseURL: api.BASE_URL
})

// axios({
//   method: 'post',
//   url: api.AUTH_URL,
//   data: {
//     identifier: api.IDENTIFIER,
//     password: api.PASSWORD
//   }
// }).then(res => {
//   const token = res.data.jwt
//   client.defaults.headers.common['Authorization'] = `Bearer ${token}`
// })

client.interceptors.request.use(config => {
  NProgress.start()
  return config
})

client.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default client
