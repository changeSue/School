import request from '@/utils/request.js'

// GET /json/file/list
// 查询文件列表：查询满足条件的文件列表 (接口的参数是拼接的)
export const getUploadList = params => { return request({ url: '/json/file/list', method: 'get', params: params  }) }

// 下载文件
export const downloadExcel = fileId => { return request({ url: '/json/file/download?fileId=' + fileId, method: 'get'  }) }

// 新增文件,需登录
export const uploadAdd = (multipartFiles, fileDescribe,type) => { 
  return request({ url: '/json/file/add?multipartFiles=' + multipartFiles + '&fileDescribe=' + fileDescribe + '&type=' + type,
   method: 'post'  
  }) 
}

// 修改文件信息根据id，修改，非管理员只能修改自己上传的文件的部分信息
export const uploadUpdate = (fileId, state,type,remark) => { 
  return request({ url: '/json/file/update?fileId=' + fileId + '&type=' + type + '&state=' + state + '&remark=' + remark,
   method: 'put'  
  }) 
}


// 删除文件：根据分类id，删除文件，可批量删除，多个id逗号分隔，非管理员只能删除自己上传的文件
export const deleteUpload = fileIds => { return request({ url: '/json/file/delete?fileIds=' + fileIds, method: 'delete'  }) }
