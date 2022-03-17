<template>
<!--  HomePage.-->
    <div id="home">

        <div id="left">
            <SummarizePage/>
        </div>
        <div id="right">
            <router-view></router-view>
        </div>

    </div>
</template>

<script lang="ts">
import SummarizePage from "@/components/Home/SummarizePage.vue";
import {defineComponent} from "vue";

export default defineComponent({
    name: "HomePage",
    components: {
        SummarizePage,
    },
    setup(){
    },
    mounted(){
        this.$router.push({path:'todo-list-content',query:{index:1}});
    }
});
</script>

<style lang="less" scoped>
#home{
    //style
    border-radius:20px;
    background-color: #a1a1a1;

    width: 100%;
    height: 100%;
    min-width:800px;
    max-width:1650px;

    //display
    display:grid;
    grid-template-columns: 1fr 3fr;

    #left{
        flex-grow: 1;
        padding: 10px;

        min-width:300px;
        max-width:400px;
        min-height: 500px;

        right:10px;
    }

    #right{
        flex-grow: 3;
        border-radius: 10px;
        background-color: aliceblue;

        margin:10px;
        left:10px;
        right:10px;
        min-width: 400px;
    }
}
</style>
