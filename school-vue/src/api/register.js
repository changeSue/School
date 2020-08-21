import request from '@/utils/request.js'

// 直接输入账号密码注册：只需验证账号是否已存在，长度、字符是否合法
export const registerAdd = (number, password) => { return request({ url: 'json/register/direct?number=' + number + '&password=' + password , method: 'post'  }) }

