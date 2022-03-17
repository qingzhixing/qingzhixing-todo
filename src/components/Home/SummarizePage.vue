<template>
<!--    SummarizePage-->
    <div id="summarize-page">

        <div id="user-info-display">
            <UserInfoDisplay/>
        </div>

        <div id="search">
            <a-input-search
                placeholder="Search"
                :search-button="true"
                size="large"
                v-model="keyword"
                @search="DoSearch()"
                @keydown.enter="DoSearch()">
            </a-input-search>
        </div>

        <div id="todo-summarize">
            <TodoSummarize/>
        </div>

        <div id="create">

            <div id="create-list">
                <a-button type="secondary" :long="true" @click="CreateNewList()">
                    新建列表
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
            </div>

            <div id="create-list-group">
                <a-button type="secondary" :long="true" @click="CreateNewListGroup()">
                    创建新组
                    <template #icon>
                        <icon-folder-add />
                    </template>
                </a-button>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
import UserInfoDisplay from "@/components/Home/Summarize/UserInfoDisplay.vue";
import TodoSummarize from "@/components/Home/Summarize/TodoSummarize.vue"
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
    name: "SummarizePage",

    components:{
        UserInfoDisplay,
        TodoSummarize,
    },

    setup(){
        const router=useRouter();

        let keyword=ref<string>("");

        let CreateNewList=function(){
            alert("Creating a new list");
            //TODO:完成创建列表
        };

        let CreateNewListGroup=function(){
            alert("Creating a new list group");
            //TODO:完成创建列表组
        };

        let DoSearch=function(){
           router.push({
               path:"search",
               query:{keyword:`${keyword.value}`}
           });
        };

        return{
            keyword,
            CreateNewList,
            CreateNewListGroup,
            DoSearch
        };
    },
})
</script>

<style lang="less" scoped>
#summarize-page{
    border: 1px solid black;
    height:100%;
    position: relative;
    left:10px;

    #user-info-display{
    }

    #search{
    }

    #todo-summarize{
    }

    #create{

        display:grid;
        grid-template-columns: repeat(2,1fr);
        width: 100%;
        #create-list{
        }
        #create-list-group{
        }
    }
}
</style>
