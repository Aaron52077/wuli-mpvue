// app 模块
import { SET_TOKEN } from '../mutation-types'
import { showTextModal } from '@/utils'
import { wxRequest } from '@/api/home'

const app = {
    state: {
        token: '',
    },
    mutations: {
        [SET_TOKEN](state, val) {
            state.token = val
        },
    },
    actions: {
       async postRequest({ commit }, params) {
            const res = await wxRequest({
                    method: "POST",
                    data: params
                }).then(res => {
                    if (res.success && res.token) {
                        showTextModal(res.info)
                        commit(SET_TOKEN, res.token)
                        wx.setStorageSync(SET_TOKEN, res.token)
                    } else {
                        showTextModal('请求失败')
                    }
                }).catch(err => {

                })
            return res
        },
    }
}

export default app
