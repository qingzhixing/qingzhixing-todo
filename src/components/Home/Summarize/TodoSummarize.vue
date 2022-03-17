<template>
    <div id="todo-summarize">
        TodoSummarize
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "TodoSummarize",
    setup(){

    },
    mounted(){
        console.log("TodoSummarize请求数据库");
        //TODO:完成数据请求
    }
});
</script>

<style scoped>
#todo-summarize{

}
</style>
