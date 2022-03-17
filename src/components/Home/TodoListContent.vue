<template>
  TodoListContent
<div id="right">
  listIndex:{{todoListIndex}}
</div>
</template>

<script lang="ts">

import {defineComponent, ref, watch} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
    name: "TodoListContent",
    setup(){
        const route=useRoute();

        let todoListIndex = ref(route.query.index);

        watch(
            ()=>route.query.index,
            (newIndex)=>{
                todoListIndex.value=newIndex;
            }
        );

        return{
            todoListIndex,
        };
    },
});
</script>

<style scoped>
#right{
  border:1px solid black;
}
</style>
