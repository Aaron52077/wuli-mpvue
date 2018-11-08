import { wxPromise } from '@/utils/request'

// 基于 https://www.easy-mock.com 用法
export const wxRequest = (params) => {
    return wxPromise(params, '/mock')
}

