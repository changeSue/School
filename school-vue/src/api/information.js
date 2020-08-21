import request from '@/utils/request.js'

// 查询用户列表：根据多个筛选条件查询,需管理员权限 (接口的参数是拼接的)
export const getUserList = params => { return request({ url: ' /json/user/list', method: 'get', params: params  }) }

// 搜索用户：可输入账号、昵称模糊搜索
export const getSearchUserList = searchStr => { return request({ url: ' /json/user/search?searchStr=' + searchStr, method: 'get'  }) }

// 根据id查询用户详情信息：根据多个筛选条件查询,需管理员权限
export const getUserListById = userId => { return request({ url: '/json/user/getUserById?userId=' + userId, method: 'get' }) }

// 根据id设置用户角色：根据id设置用户角色,需管理员权限
export const setUserRoleById = userId => { return request({ url: '/json/user/setRole?userId=' + userId + '&roleId=' + roleId, method: 'get' }) }

// 修改用户信息：根据ID修改,需管理员或自己才能修改
export const updateUser = userId => { return request({ url: '/json/user/update?userId=' + userId, method: 'put' }) }

// 删除用户：根据ID删除
export const deleteUser = userId => { return request({ url: '/json/user/delete?userId=' + userId, method: 'delete' }) }
