<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'pinia'
import userStore from '@/stores/user'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    // 1. Store
    // 2. 要帶入的State, getters

    ...mapState(userStore, ['name'])
  }
}
</script>
