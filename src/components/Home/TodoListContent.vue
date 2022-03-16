<template>
  TodoListContent
<div id="right">
  listIndex:{{todoListIndex}}
</div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
    name: "TodoListContent",
    setup(){
        let todoListIndex:any = 0;
        return{
            todoListIndex,
        };
    },
    mounted(){
        this.todoListIndex=this.$route.query.index;
    }
});
</script>

<style scoped>
#right{
  border:1px solid black;
}
</style>
