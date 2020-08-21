import fetch from '@/utils/fetch';

export function Login(username, password) {
  return fetch({
    url: '/login',
    method: 'post',
    username,
    password
  })
}
