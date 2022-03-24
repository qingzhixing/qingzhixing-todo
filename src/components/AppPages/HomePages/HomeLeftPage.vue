<template>
    <div id="home-left-page">
        <div id="user-info-display">

            <div id="image-info">
                <a-avatar
                    shape="circle"
                    trigger-type="mask">

                    <img alt="avatar"
                         :src="avatarURI"
                    />
                    <template #trigger-icon>
                        <icon-settings />
                    </template>
                </a-avatar>
            </div>

            <div id="space"/>

            <div id="text-info">
                <div id="username">{{ username }}</div>
                <div id="user-account">{{ account }}</div>
            </div>

        </div>

        <div id="search">
            <a-input-search v-if="!isSearching" v-model="searchInput" placeholder="Please enter something"
                            @search="DoSearch()"/>
            <a-input-search v-if="isSearching" v-model="searchInput" placeholder="Searching" loading/>
        </div>

        <div id="menu"></div>

        <div id="create-bar"></div>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";
import UserInfo from "@/types/UserInfo";

export default defineComponent({
    name: "HomeLeftPage",
    setup(){
        let userInfo=reactive<UserInfo>({
            username:"Username",
            account:"Account-ID",
            avatarURI:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
        });

        let searchInput=ref<string>("");
        let isSearching=ref<boolean>(false);
        let DoSearch=function(){
            isSearching.value=true;
            console.log("Searching for "+searchInput.value);
            setTimeout(()=>{
                isSearching.value=false;
            },3000);
        }

        return {
            ...toRefs(userInfo),
            searchInput,
            isSearching,
            DoSearch,
        }
    }
});
</script>

<style lang="less" scoped>
@import url("~@/style/global.less");
#home-left-page{
    display:flex;
    flex-direction:column;

    height:100%;

    @userInfoDisplayHeight:60px;
    #user-info-display{
        background-color: antiquewhite;

        margin:5px 5px;
        height:@userInfoDisplayHeight;

        display:flex;
        flex-direction:row;
        align-items:center;

        #image-info{
            //正方形
            height:100%;
            width:@userInfoDisplayHeight;
            align-items:center;

            display: flex;
            justify-content:center;
        }

        #space{
            width:5px;
        }

        #text-info{
            flex:1fr;
            width:100%;

            #username{
                font-size:18px;
                font-weight:bold;
            }

            #user-account{
                font-size:10px;
                font-weight:lighter;
            }
        }
    }

    @searchHeight:40px;
    #search{
        background-color: aquamarine;
        width: 100%;
        height:@searchHeight;
    }

    #menu{
        flex:1fr;
        height:100%;
        background-color: green;
    }

    @createBarHeight:30px;
    #create-bar{
        width: 100%;
        height:@createBarHeight;
        background-color: blue;
    }

}


</style>
