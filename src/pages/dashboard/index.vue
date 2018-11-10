<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">wuli mpVue</div>
        <div v-for="(group, index) of list" :key="index">
            <div class="wuli-panel__title">{{ group.title }}</div>
            <div class="wuli-panel">
                <navigator v-for="(item, idx) of group.content" :key="idx" class="wuli-cell wuli-cell__access" :url="item.path">
                    <div class="wuli-cell__bd">{{ item.name }}</div>
                    <div class="wuli-cell__ft"></div>
                </navigator>
            </div>
        </div>
    </div>
</template>

<script>
import components from './config'

export default {
    data() {
        return {
            list: components
        }
    },
    onShow() {
       
    },
    methods: {
       
    },
}
</script>
