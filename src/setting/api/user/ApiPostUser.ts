import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { UserActionType } from '../../../type'

export interface UserPostData extends UserActionType { }

class _ApiPostUser {
  async post(data: UserPostData) {
    const config: AxiosRequestConfig = {}
    return await callApi().post('/users', data, config)
  }
}

export const ApiPostUser = new _ApiPostUser()
