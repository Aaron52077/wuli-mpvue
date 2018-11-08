<template>
    <div class="container">
        <button class="wuli-btn" @click="toggleVisible">弹出层</button>
        
        <div class="wuli-popup" :class="[visible ? 'wuli-popup__show' : '']">
            <div class="wuli-popup__mask" @click.stop="toggleVisible"></div>
            <div class="wuli-popup__container">
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { showSuccessModal, showTextModal } from '@/utils'

export default {
    data() {
        return {
            items: [
                {name: 'USA', value: '美国'},
                {name: 'CHN', value: '中国', checked: 'true'},
                {name: 'BRA', value: '巴西'},
                {name: 'JPN', value: '日本'},
                {name: 'ENG', value: '英国'},
                {name: 'TUR', value: '法国'}
            ],
            visible: false
        };
    },
    onShow() {
        // `this` 指向 vm 实例
        // console.log("motto is: " + this.motto, "小程序触发的 onshow");
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible
        }
    },
    computed: {
        ...mapGetters(['token'])
    }
};
</script>

<style scoped>

</style>
