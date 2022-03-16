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
            Todo Summarize
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
import {defineComponent, ref} from "vue";

export default defineComponent({
    name: "SummarizePage",

    components:{
        UserInfoDisplay,
    },

    setup(){
        let keyword=ref<string>("");

        let CreateNewList=function(){
            alert("Creating a new list");
        };

        let CreateNewListGroup=function(){
            alert("Creating a new list group");
        };

        return{
            keyword,
            CreateNewList,
            CreateNewListGroup,
        };
    },
    methods:{
        DoSearch: function(){
            // console.log(this.keyword);
            this.$router.push({
                path:"search",
                query:{keyword:this.keyword}
            });
        },
    }
})
</script>

<style lang="less" scoped>
#summarize-page{
    border: 1px solid black;
    padding: 10px;
    height: 95%;
    //display

    div{
        margin-top:10px;
        margin-bottom:10px;
    }

    #create{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        #create-list{
        }
        #create-list-group{
        }
    }
}
</style>
