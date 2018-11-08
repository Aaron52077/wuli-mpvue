<template>
  <div class="container">
        <div class="doc-title wuli-hairline__bottom">LGION</div>
        <div class="doc-description">登录</div>
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
        <mptoast />
  </div>
</template>

<script>
import mptoast from 'mptoast'
import wpButton from '@/components/button'
import wpCell from '@/components/cell'

export default {
    data() {
        return {
            id: 0,
            userInfo: null
        }
    },
    onShow() {
        const { id } = this.$root.$mp.query
        this.id = id
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
            this.$store.dispatch('postRequest')
        },
    },
    components: {
        mptoast,
        wpButton,
        wpCell
    },
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

