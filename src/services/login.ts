import api from './api'
import qs from 'qs'

const AuthService = {
  user: {
    async login(username: string, password: string) {
      return await api({
        method: 'post',
        url: process.env.REACT_APP_GATEWAY_AUTH + '/token',
        data: qs.stringify({
          username: username.replace(/[^0-9]/g, ''),
          password,
          grant_type: 'password'
        }),
        headers: {
          ContentType: 'application/x-www-form-urlencoded',
          Authorization: 'Basic ZXNwb3J0ZXN1cGVyYWNhbzp3ZWIxMjM='
        }
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async forgotPassword(user: any) {
      return await api({
        method: 'put',
        url: process.env.REACT_APP_GATEWAY + '/usuarios/recuperar-senha',
        data: user,
        headers: {
          ContentType: 'application/x-www-form-urlencoded',
          Authorization: 'Basic ZXNwb3J0ZXN1cGVyYWNhbzp3ZWIxMjM='
        }
      })
    },
    async checkToken(token: string) {
      return await api({
        method: 'post',
        url: process.env.REACT_APP_GATEWAY_AUTH + '/check_token',
        data: qs.stringify({
          token
        }),
        headers: {
          ContentType: 'application/x-www-form-urlencoded',
          Authorization: 'Basic ZXNwb3J0ZXN1cGVyYWNhbzp3ZWIxMjM='
        }
      })
    }
  }
}

export default AuthService
