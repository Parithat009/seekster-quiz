import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { UserDTO } from '../../../model'

export interface UserGetParams { }

class _ApiGetUser {
  async get() {
    const config: AxiosRequestConfig = {}
    return await callApi().get<UserDTO[]>('/users', config)
  }
}

export const ApiGetUser = new _ApiGetUser()
