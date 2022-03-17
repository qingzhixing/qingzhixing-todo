<template>
    <div id="user-info-display">

        <div id="avatar">
            <a-popover position="bl" trigger="click">

                <a-avatar :style="{backgroundColor:'#14a9f8'}">
                    <IconUser/>
                </a-avatar>

                <template #content>
                    <div id="popover-options">
                        <div>
                            <a-button type="outline" :long="true" @click="ManageAccount()">
                                管理账户
                                <template #icon>
                                    <icon-user />
                                </template>
                            </a-button>
                        </div>

                        <div>
                            <a-button type="outline" :long="true" @click="JumpToSettingsPage()">
                                设置
                                <template #icon>
                                    <icon-settings />
                                </template>
                            </a-button>
                        </div>

                    </div>
                </template>
            </a-popover>
        </div>

        <div id="user-info">

            <div id="username">
                {{name}}
            </div>

            <div id="account-id">
                {{accountId}}
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import IUserInfo from '@/types/UserInfo';
import {useRouter} from "vue-router";
import {defineComponent, reactive, toRefs} from "vue";


export default defineComponent({
    name: "UserInfoDisplay",

    setup(){
        const router=useRouter();

        let userInfo=reactive<IUserInfo>({
            name:"Username",
            accountId:"123456ABC",
        });

        let ManageAccount=function(){
            alert("manage account");
            //TODO:finish manage account
        };

        let JumpToSettingsPage=function(){
            router.push({path:'/settings'});
        };

        return{
            ...toRefs(userInfo),
            ManageAccount,
            JumpToSettingsPage,
        };
    },

})
</script>

<style lang="less" scoped>
#user-info-display{
    //flex
    display: flex;
    flex-direction: row;
    align-items: center;

    //style
    padding: 5px;

    #user-info{
        margin-left: 5px;

        #username{
            font-weight:bold;
            font-size: 15px;
        }

        #account-id{
            font-weight: lighter;
            font-size: 12px;
            text-align: left;
        }
    }
}

#popover-options{
    list-style: none;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div{
        margin:2px 0;
        width:100%;
    }
}
</style>
