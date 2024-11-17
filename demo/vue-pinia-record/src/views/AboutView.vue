<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ name }}, {{ getUserName }}, {{ wallet }}
    <br>
    <button type="button" @click="updateName">按我</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/user'

// Composition API
// Option API
export default {
  computed: {
    // 1. Store
    // 2. 要帶入的State, getters

    ...mapState(userStore, ['name', 'getUserName', 'wallet'])
  },
  methods: {
    ...mapActions(userStore, ['updateName'])
  }
}
</script>
