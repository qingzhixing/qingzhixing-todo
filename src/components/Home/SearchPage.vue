<template>
    <div id="search">
        Searching for {{keyword}}
        查询结果:{{searchResultList}}
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
    name: "SearchPage",
    setup(){
        const route=useRoute();

        let keyword=ref(route.query.keyword);
        watch(()=>route.query.keyword,
            (newKeyword)=>{
            keyword.value=newKeyword;
        });

        //查找数据库
        let searchResultList=ref([]);

        let SearchForKeyword=function(keyword:any){
            console.log("请求数据库用于查找"+keyword);
            searchResultList.value=[];
            //TODO:完成请求数据库并查找操作
        }

        watch(keyword,(newKeyword)=>{
            SearchForKeyword(newKeyword);
        });

        return{
            keyword,
            searchResultList,
        }
    },
})
</script>

<style scoped>

</style>
