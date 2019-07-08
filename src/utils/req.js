import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888'

export default (url, options) => {
  return axios(url, options).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
}