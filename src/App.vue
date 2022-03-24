<template>
  <div>
      <router-view/>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
  }
});
</script>
<style lang="less">
@import url("~@/style/global.less");

html, body {
    height:100%;
    @media (min-height:@minWindowHeight) {
        overflow:hidden;
    }
    padding:0;
    margin:0;
}
#app{
    padding:0;
    margin:0;

    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;

    min-height:@minWindowHeight;

    background-color: #f0f0f0;
}
</style>
