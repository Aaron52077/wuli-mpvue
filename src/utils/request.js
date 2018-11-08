// request.js
import { showTextModal } from './index'

const BASE_API = process.env.BASE_API;
const uploadPath = `${BASE_API}/api/upload`;

// 常用用法
export const wxPromise = (params, url) => {
    wx.showNavigationBarLoading()
    return new Promise((resove, reject) => {
        wx.request({
            url: BASE_API + url,
            method: params.method || 'GET',
            data: params.data || {},
            header: {
                "content-type": "application/json",
                'timestamp': Date.parse(new Date()) / 1000,
                'signature': "Aaron_chao",
                'fc_port': 'wuli_mpvue'
            },
            success(res) {
                wx.hideNavigationBarLoading()
                resove(res.data)
            },
            fail(res) {
                wx.hideNavigationBarLoading()
                reject(res.error)
                console.log('reqest error', res)
            }
        });
    });
};

// 登录token请求 wxTokenRequest
export const wxTokenRequest = (params, url) => {
    wx.showNavigationBarLoading()
    var token = wx.getStorageSync('SET_TOKEN');

    return new Promise((resove, reject) => {
        // 未登录
        if (!token) {
            showTextModal('未登录,请求失败！')
            setTimeout(() => {
                wx.hideNavigationBarLoading()
            }, 500)
        } else {
            wx.request({
                url: BASE_API + url,
                method: params.method || 'GET',
                data: params.data || {},
                header: {
                    "content-type": "application/json",
                    'timestamp': Date.parse(new Date()) / 1000,
                    'Authorization': `Bearer ${token}`,
                    'signature': "Aaron_chao",
                    'fc_port': 'wuli_mpvue'
                },
                success(res) {
                    wx.hideNavigationBarLoading()
                    resove(res.data)
                },
                fail(res) {
                    wx.hideNavigationBarLoading()
                    reject(res.error)
                }
            });
        }
    });
};


