<template>
    <div style="height:100%">
        <idx-header/>
        <navMenu/>
        <div class="container">
            <keep-alive>
                <router-view class="warp"/>
                <idx-home />
            </keep-alive>
        </div>
        <idx-footer/>
    </div>
</template>

<script>
import IdxHeader from '@/components/header'
import NavMenu from '@/components/navMenu'
import IdxFooter from '@/components/footer'
import IdxHome from '@/views/pub/index'
export default {
    components: {
        IdxHeader,
        NavMenu,
        IdxFooter,
        IdxHome
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    .container{
        width: 100%;
        min-height: 100%;
        .carousel {
            width: 100%;
        }
    }
</style>