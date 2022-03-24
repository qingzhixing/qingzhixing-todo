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
@import url("~@/style/global.less");

//折叠左侧时窗口最大大小
@foldLeftWindowWidth:700px;

#home-page {
    .debug();
    background-color:#3e3e3e;

    display: flex;
    flex-direction:row;
    width: @appPageWidth;
    min-height: @minWindowHeight;
    height:@appPageHeight;

    #left{
        .debug();
        @media screen and (min-width: @foldLeftWindowWidth){
            width:400px;
            max-width:@foldLeftWindowWidth;
        }
        @media screen and (max-width: @foldLeftWindowWidth){
            display:none;
        }
    }
    #space{
        @media screen and (min-width: @foldLeftWindowWidth){
            //width: 30px;
        }
        @media screen and (max-width: @foldLeftWindowWidth){
            display:none;
        }
    }
    #right{
        .debug();
        flex:1fr;
        width:100%;

        padding-top:10px;
        padding-left:10px;
        @media screen and (min-width: @foldLeftWindowWidth){
            border-top-left-radius: 15px;
        }
    }
}
</style>
