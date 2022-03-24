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
@minWindowHeight:400px;
html, body {
    height:100%;
    @media (min-height:@minWindowHeight) {
        overflow:hidden;
    }
}
#app{
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;

    min-height:@minWindowHeight;
}
</style>
