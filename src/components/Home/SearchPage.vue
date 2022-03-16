<template>
  <div id="search">
    Searching for {{keyword}}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "SearchPage",
    setup(){
        let keyword:any ="";
        return{
            keyword,
        }
    },
    mounted(){
        this.keyword=this.$route.query.keyword;
    }
})
</script>

<style scoped>

</style>
