import axios from '../utils/req'

export function query(params) {
  return axios('/api', {
    method: 'get',
    params: params
  })
}