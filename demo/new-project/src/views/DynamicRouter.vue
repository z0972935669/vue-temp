<template>
  <div>
    <!-- -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DynamicRouter',
  created () {
    console.log(this.$route.params.id)
    // const seed = '76395f7251a02281'
    const seed = this.$route.params.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then(res => {
      console.log(res)
    })
  }
}
</script>
