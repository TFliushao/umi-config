import request from '../utils/request'

export function query(options) {
  return request('http://localhost:8888/api', options)
}