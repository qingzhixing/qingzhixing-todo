<template>
    <div>
        HomePage
        <home-left-page/>
        <home-right-page/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HomeLeftPage from "@/components/AppPages/HomePages/HomeLeftPage.vue";
import HomeRightPage from "@/components/AppPages/HomePages/HomeRightPage.vue";

export default defineComponent({
    name: "HomePage",
    components:{
        HomeRightPage,
        HomeLeftPage,
    }
})
</script>

<style scoped>

</style>
