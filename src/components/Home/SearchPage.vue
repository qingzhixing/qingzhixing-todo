<template>
  <div id="search">
    Searching for {{keyword}}
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
    name: "SearchPage",
    setup(){
        const route=useRoute();

        let keyword:any=ref(route.query.keyword);
        watch(()=>route.query.keyword,
            (newKeyword)=>{
            keyword.value=newKeyword;
        });

        return{
            keyword,
        }
    },
})
</script>

<style scoped>

</style>
