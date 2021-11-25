import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'

class _ApiDeleteUser {
  async delete(userId: number) {
    const config: AxiosRequestConfig = {}
    return await callApi().delete(`/users/${userId}`, config)
  }
}

export const ApiDeleteUser = new _ApiDeleteUser()
