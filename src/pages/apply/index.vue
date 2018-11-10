<template>
  <div class="container">
        <div class="doc-title wuli-hairline__bottom">STAR</div>
        <div class="doc-description">
            <image class="doc-description__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAOGSURBVGje7VhLSFVRFF1HLROtLHtmhVJmz0c/NUstoQ84KAuSauKkdJDQh2pghRAFkTQwiKIoMppFk0ALKioKggbmQEJCsAQjKIMc9Ochymqg73Pf3ed+n4PgreG+e6+1zn7nnbvPBVJI4X8Dq3iOA5Twhq1cPZ3S63mPTnCNoeSL1/OnI/EIBrgpeeKVHHElHkEPV/gXz+QVT+IRnKLyIx/kuC/5yR+jwKt8nW/xCMq8yO9NmjxJ1rqV351UeZKsciNfk3R5kiyWtIQ9ygKMeNw21pjAHPU3MZhmkk/Do4TQHzz3IBfGg4RIOq47af9BU+uOAADX8q7jZrdzEQAIFXV28vkCXWn0aYB34uIf+ZJd7OYrfomLXmRWNH+nwDbL2kCnUJJjyNjIowyKtRU8zVWGSLHAdsJKvlBs6EwPO0Dfz4QFGTdhq8gzw6sByO1u1PnN1mypIDxCe5jHLTu+A1s1PPs8d6BFE18p+32i8ZvvuQMhDeMFKXmmJnmz5/UD4H6RM0whtURM7fUjDzBds6y5kYzYHlgjMrT5M6AmcEh8sMxsoFJM9NkBAE/FaHRujhkoFxN/+TYgv1kFA6VC2mc/E+UUxsToUrMBaXQc968PitGA2YB0bOYlwUCaGM00Pw4LaTm+pvoEKQOiajEDX8XEbN8GAmJ01GzgvZgoDpKuIN8Jhs0G3oqJDb4NHBCjg6YI92gOzXQ/6pytYS03d6Bfw7Hd1/qbNPFhU0T7NkwYoVytf4mGcSx2OEQ7oMbwTMPTRU9DGXO1Xe0Q/93cpe1BHxe6lg9RD/nNq50JJ3HMeR84nx2WXGm6wqtxSWeFbyOddvMRFXfwIa3Roi+Pvxf0s5gZPC9SfBJqGzlKZ7Da1LxlSN0AsE2gaBfX/tiR/HHrFgYS0ucxg79NJOIbgkWODFjfDQE2G9JvAgwmUHRrKsEftvLb7Hew4mtDSR7A5fwQF2nW1tp9Sb1hKw8AXGAoOjkVzeUWVttUXraU/27b/ijROkOh47eBjYEipzwAWG8ovW+3dgcGKlzIAwAbtFRNHgzU6Gp0hyJUN3Tfc9zPiWWqx7UBQL1AyG2NgCEsVv36x5ZkahBZMP913MxIZxBUll8dbVajwuowqvHNk4E+hFS7onWSg3aqXpWP+tggbXFfit0t3qFWVapBJBMs422SQ7G7vSmjkGGSl1iSVOEUUphe/AMv8ctn/pO1zAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNC0wNFQxMDo0MDo0MiswODowMNlOhSIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDQtMDRUMTA6NDA6NDIrMDg6MDCoEz2eAAAAAElFTkSuQmCC"></image>
            <text>https://github.com/Aaron52077/wuli-mpvue</text>
        </div>
        <div class="wuli-panel__title">微信登录授权</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="primary" size="small" openType="getUserInfo" @getuserinfo="getUersInfo" round>获取用户信息</wp-button>
                <wp-button type="primary" size="small" @click="clickHandle" round>Easy Mock</wp-button>
            </div>
        </div>
        <template v-if="userInfo != null">
            <div class="wuli-panel">
                <div class="wuli-preview">
                    <img class="wuli-preview__avatar" :src="userInfo.avatarUrl" mode="aspectFit" />
                </div>
                <wp-cell :title="'名字：'+ userInfo.nickName" :value="'城市：'+ userInfo.city"></wp-cell>
                <wp-cell :title="[userInfo.gender === 1 ? '性别：男' : '性别：女']"></wp-cell>
            </div>
        </template>
        <template v-if="list.length != 0">
            <div class="wuli-panel">
                <wp-cell v-for="item of list" :key="item.age" :title="'名字：'+ item.name" :value="'年龄：'+ item.age"></wp-cell>
            </div>
        </template>
        <mptoast />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mptoast from 'mptoast'
import wpButton from '@/components/button'
import wpCell from '@/components/cell'
import { wxRequest } from '@/api/home'

export default {
    data() {
        return {
            id: 0,
            userInfo: null,
            list: []
        }
    },
    onShow() {
        // 页面跳转获取query值
        // const { id } = this.$root.$mp.query
    },
    onUnload() {
        wx.hideNavigationBarLoading()
    },
    methods: {
        showToast () {
            this.$mptoast('我是提示信息', 'error', 2000)
        },
        getUersInfo(e) {
            const { userInfo, errMsg } = e.mp.detail;
            this.userInfo = userInfo;
            if(errMsg === 'getUserInfo:ok') {
                this.userInfo = userInfo
                this.$mptoast('获取成功', 'success', 1500)
            }else {
                this.$mptoast('您取消了授权，获取失败', 'error', 1500)
            }
        },
        clickHandle() {
            // 方式1：通过store设置token
            // this.$store.dispatch('postRequest')
            // 方式2：常规wxRequest请求
            wxRequest({
                method: "POST"
            }).then(res => {
                this.list = res.data.test
                this.$mptoast(res.info, 'success', 1500)
            }).catch(err => {})
        },
    },
    components: {
        mptoast,
        wpButton,
        wpCell
    },
    computed: {
        ...mapGetters(['token'])
    }
};
</script>

<style lang="less" scoped>
.wuli-preview {
    position: relative;
    padding: 15px 0;
    text-align: center;
    background-color: #fff;
    overflow: hidden;
    &__avatar {
        width: 128px;
        height: 128px;
        border-radius: 50%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, .1);
    }
}
</style>

