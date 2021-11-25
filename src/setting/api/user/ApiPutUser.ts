import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { UserActionType } from '../../../type'

export interface UserPutData extends UserActionType {
  id: number
}

class _ApiPutUser {
  async put(data: UserPutData) {
    const config: AxiosRequestConfig = {}
    return await callApi().put(`/users/${data?.id}`, data, config)
  }
}

export const ApiPutUser = new _ApiPutUser()
