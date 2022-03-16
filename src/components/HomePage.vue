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

<script>
import SummarizePage from "@/components/Home/SummarizePage.vue";

export default {
    name: "HomePage",
    components: {
        SummarizePage,
    },
    mounted(){
        this.$router.push({path:'todo-list-content',query:{index:1}});
    }
};
</script>

<style lang="less" scoped>
#home{
    //flex
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    flex-wrap: nowrap;

    //style
    margin: 0 auto;
    border-radius:10px;
    padding:10px;
    background-color: #a1a1a1;

    //size
    width: 98%;
    height: 95vh;

    #left{
        flex-grow: 1;
        padding: 10px;
    }

    #right{
        flex-grow: 3;
        border-radius: 10px;
        background-color: aliceblue;

        margin: 10px 20px;
        padding: 10px;
    }
}
</style>
