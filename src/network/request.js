import axios from 'axios'

export function request(config) {
  // 创建一个axios实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/h8',
    timeout: 5000
  })

  //  拦截器 
  //  请求拦截器
  instance.interceptors.request.use(config => {
    //  拦截请求配置
    //可以对配置进行处理或者其它操作
    // 处理完以后一定要return返回配置
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    //  拦截处理结果
    //可以对结果进行处理或者其它操作
    // 处理完以后一定要return返回结果
    return res
  }, err => {
    console.log(err)
  })

  // 发送真正的网络请求
  return instance(config)
}