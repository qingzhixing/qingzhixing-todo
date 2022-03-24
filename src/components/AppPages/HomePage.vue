<template>
    <div id="home-page">
        <div id="left">
            <home-left-page/>
        </div>
        <div id="space"/>
        <div id="right">
            <home-right-page/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HomeLeftPage from "@/components/AppPages/HomePages/HomeLeftPage.vue";
import HomeRightPage from "@/components/AppPages/HomePages/HomeRightPage.vue";

export default defineComponent({
    name: "HomePage",
    components:{
        HomeRightPage,
        HomeLeftPage,
    }
})
</script>

<style lang="less" scoped>
@minWindowHeight:400px;

//折叠左侧时窗口最大大小
@foldLeftWindowWidth:700px;

.debug{
    background-color: aqua;
    border: 2px double black;
}
#home-page {
    .debug();
    display: flex;
    flex-direction:row;
    width: 90vw;
    min-height: @minWindowHeight;
    height:90vh;

    #left{
        .debug();
        flex:1fr;
        @media screen and (min-width: @foldLeftWindowWidth){
            width:100%;
            max-width:@foldLeftWindowWidth;
        }
        @media screen and (max-width: @foldLeftWindowWidth){
            width:0;
        }
    }
    #space{
        @media screen and (min-width: @foldLeftWindowWidth){
            width: 30px;
        }
        @media screen and (max-width: @foldLeftWindowWidth){
            width:0;
        }
    }
    #right{
        .debug();
        flex:2fr;
        width:100%;
    }
}
</style>
