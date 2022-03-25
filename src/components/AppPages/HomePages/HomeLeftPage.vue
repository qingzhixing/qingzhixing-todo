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
                            @search="DoSearch()" @keydown.enter="DoSearch()" allow-clear/>
            <a-input-search v-if="isSearching" v-model="searchInput" placeholder="Searching"
                            @keydown.enter="DoSearch()" allow-clear loading/>
        </div>

        <div id="menu">
            <div id="default-list">
                <a-button v-for="(defaultList,defaultGroupIndex) in defaultGroup.listArray"
                          :key="defaultGroupIndex" :long="true" type="text" size="large">
                    <template #icon>
                        <icon-user/>
<!--                        <img :src="defaultList.iconUri" alt="icon" style="height:20px;"/>-->
                    </template>
                    {{defaultList.listName}}
                </a-button>
            </div>
            <a-divider/>
            <div id="current-list">

            </div>
        </div>

        <div id="create-bar"></div>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";
import UserInfo from "@/types/UserInfo";
import * as FakeData from "@/data/FakeData";
import ListGroup from "@/types/ListGroup";

export default defineComponent({
    name: "HomeLeftPage",
    setup(){
        let userInfo=reactive<UserInfo>(FakeData.userInfo);

        let searchInput=ref<string>("");
        let isSearching=ref<boolean>(false);

        let debugSearchTimeout=0;
        let DoSearch=function(){
            clearTimeout(debugSearchTimeout);
            isSearching.value=true;
            console.log("Searching for "+searchInput.value);
            debugSearchTimeout = setTimeout(()=>{
                isSearching.value=false;
            },3000);
        };

        let defaultGroup=reactive<ListGroup>(FakeData.defaultListGroup);

        return {
            ...toRefs(userInfo),
            searchInput,
            isSearching,
            DoSearch,

            defaultGroup,
        }
    },
    components:{
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

    @searchHeight:36px;
    #search{
        background-color: aquamarine;
        width: 100%;
        height:@searchHeight;
    }

    #menu{
        flex:1fr;
        height:100%;
        background-color: green;

        overflow-y: scroll;

        #default-list{
            background-color: coral;
            width: 100%;
        }

        #current-list{
            height:500px;
        }
    }

    @createBarHeight:30px;
    #create-bar{
        width: 100%;
        height:@createBarHeight;
        background-color: blue;
    }

}


</style>
