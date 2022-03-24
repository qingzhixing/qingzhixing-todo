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

<style>
html, body {
    overflow: hidden;
}
#app{
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>
