<template>
    <teleport to="body">
        <div v-if="display" id="manage-account-background"/>
        <div v-if="display" id="manage-account-window">
            <header>
                管理账户
            </header>

            <main>
                <div id="account-info" v-for="(account,index) in accountList" :key="index">
                    <div class="username">
                            {{account.name}}
                    </div>
                    <div class="account-id">
                        {{account.accountId}}
                    </div>

                    <div class="logout">
                        <a-button type="primary" :long="true"
                                  @click="LogoutAccount(account.accountId)" status="warning">
                            登出账号
                        </a-button>
                    </div>
                </div>
                <div id="add-account">
                    <a-button type="primary" :long="true"
                              @click="AddAccount({name:'114514',accountId:'1919810'})">
                        添加账户
                        <template #icon>
                            <icon-user-add />
                        </template>
                    </a-button>
                </div>
            </main>

            <footer>
                <a-button type="primary" :long="true" @click="Close()" shape="round">
                    关闭
                </a-button>
            </footer>
        </div>
    </teleport>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import mitt from "@/types/mitt"
import UserInfo from "@/types/UserInfo";

export default defineComponent({
    name: "ManageAccount",
    setup(){
       let display=ref(false);

       onMounted(()=>{
           mitt.on("displayManageAccountWindow",()=>{
               display.value=true;
           });
       });

       let Close=function(){
          display.value=false;
       };

       let accountList=ref<Array<UserInfo>>();

       let QueryForUserList=function(){
            //TODO:实现请求
           accountList.value=[
               {name:"User",accountId:"114514IEEE"},
           ];
       };

       let LogoutAccount=function(accountId:string){
           accountList.value?.forEach((value,index)=>{
               if(value.accountId==accountId){
                   accountList.value?.splice(index,1);
               }
           });
           alert(`账号:${accountId}已成功登出`);
           //TODO:实现账号登出
       };

       let AddAccount=function(userInfo:UserInfo){
           accountList.value?.push(userInfo);
       };

       onMounted(()=>{
           QueryForUserList();
       })

       return{
           display,
           accountList,
           LogoutAccount,
           Close,
           AddAccount,
       };
    },
});
</script>

<style lang="less" scoped>
#manage-account-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
}
#manage-account-window {
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    width:50%;
    height: 50%;

    background-color: aliceblue;

    opacity: 1;

    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;

    header{
        font-size: 30px;
        font-weight:bold;
        text-align:center;
    }

    main{
        overflow-y: scroll;
    }

    footer {
        margin:0 auto;
        width:50%;
    }
}
</style>
