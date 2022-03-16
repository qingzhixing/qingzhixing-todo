<template>
<!--  <div>App</div>-->
<!--  <router-link to="/">HomePage</router-link>-->
<!--  <router-link to="/settings">Settings</router-link>-->
  <div>
    <router-view></router-view>
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
</style>
