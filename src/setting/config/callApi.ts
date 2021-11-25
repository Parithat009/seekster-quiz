
import axios from 'axios'
import conf from './baseApi'

export const callApi = () => {
  return axios.create({
    baseURL: `${conf.baseURL}`
  })
}
