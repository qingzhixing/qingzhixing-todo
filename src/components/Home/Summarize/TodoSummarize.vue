<template>
    <div id="todo-summarize">
        <div id="summarize-list">
            <div id="default-summarize-list"
                v-for="(item,index) in defaultListSummarizeArray" :key="index">
                <a-button type="outline" :long="true"
                          @click="JumpToTodoListContentPage(item.index)">
                    {{item.title}}
                </a-button>
            </div>
            <hr/>
            <div id="custom-summarize-list"
                 v-for="(item,index) in customListSummarizeArray" :key="index">
                <a-button type="outline" :long="true"
                          @click="JumpToTodoListContentPage(item.index)">
                    {{item.title}}
                </a-button>
            </div>
            <hr/>
            <a-collapse id="custom-list-group">
                <a-collapse-item v-for="(group,groupIndex) in customListGroupArray"
                                 :key="groupIndex" :header="group.title">
                    <a-button type="outline" :long="true"
                              v-for="(list,listIndex) in group.content" :key="listIndex"
                              @click="JumpToTodoListContentPage(list.index)">
                        {{list.title}}
                    </a-button>
                </a-collapse-item>
            </a-collapse>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
    name: "TodoSummarize",
    setup(){
        const router=useRouter();

        interface TodoListSummarize{
            title:string;
            index:number;
        }

        interface TodoListGroup{
            title:string;
            content:Array<TodoListSummarize>;
        }

        let defaultListSummarizeArray =ref<Array<TodoListSummarize>>();
        let customListSummarizeArray = ref<Array<TodoListSummarize>>();
        let customListGroupArray = ref<Array<TodoListGroup>>();

        //更新summarize
        let UpdateSummarize=function(){
            console.log("UpdateSummarize请求数据库");
            defaultListSummarizeArray.value=[
                {title:"defaultList1",index:1},
                {title:"defaultList2",index:2},
                {title:"defaultList3",index:3},
            ];
            customListSummarizeArray.value=[
                {title:"customList1",index:4},
                {title:"customList2",index:5},
                {title:"customList3",index:6},
            ];
            customListGroupArray.value=[
                {title:"group1",content:[{title:"group1Content1",index:7}]},
                {title:"group2",content:[
                        {title:"group2Content1",index:8},
                        {title:"group2Content2",index:9},
                    ]}
            ]

            //TODO:完成数据请求
        }
        let updateIntervalId:number = 0;

        let JumpToTodoListContentPage=function(index:number){
            router.push({
                path:'todo-list-content',
                query:{index:index}
            });
        }

        return{
            defaultListSummarizeArray,
            customListSummarizeArray,
            customListGroupArray,
            updateIntervalId,
            UpdateSummarize,
            JumpToTodoListContentPage,
        };
    },
    mounted(){
        //每1s更新一次列表
        this.UpdateSummarize();
        this.updateIntervalId = setInterval(()=>{
            this.UpdateSummarize();

        },1000);
    },
    unmounted(){
        clearInterval(this.updateIntervalId)
    },
});
</script>

<style lang="less" scoped>
#todo-summarize{
    overflow-y: scroll;
    #summarize-list{
        list-style: none;
    }
}
</style>
