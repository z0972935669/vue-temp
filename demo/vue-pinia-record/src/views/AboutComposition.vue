<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ user.name }}, {{ user.getUserName }}, {{ user.wallet }}
    <br>
    {{ name }}, {{ getUserName }}, {{ wallet }}
    <br>
    <button type="button" @click="updateName">按我</button>
    <button type="button" @click="updateData">按我</button>
    <button type="button" @click="reset">reset</button>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import userStore from '@/stores/user'

// Composition API
// Option API
export default {
  setup () {
    const user = userStore()
    // reactive 1

    // user.name = '漂亮阿姨';
    const { name, wallet, getUserName } = storeToRefs(user)
    // ref 2
    // console.log(name.value)
    // name.value = '漂亮阿姨'

    const { updateName } = user
    // action 3

    function updateData () {
      // $patch 4
      user.$patch({
        name: '漂亮阿姨',
        wallet: 1000
      })
    }

    function reset () {
      user.$reset()
    }

    return {
      user,
      name,
      wallet,
      getUserName,
      updateName,
      updateData,
      reset
    }
  }
}
</script>
