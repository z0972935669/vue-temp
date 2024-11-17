<template>
  <div>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">Push</button>
    <button type="button" @click="replace">Replace</button>
    <button type="button" @click="go">Go</button>
    <hr>
    <button type="button" @click="addRoute">新增路由</button>
  </div>
</template>

<script>
export default {
  name: 'RouterNavigation',
  methods: {
    // 包含歷史記錄
    push () {
      // this.$router.push('/newPage/dynamicRouter/76395f7251a02281')
      this.$router.push({
        name: 'about'
      })
    },
    // 沒有歷史記錄
    replace () {
      this.$router.replace({
        name: 'about'
      })
    },
    // 操作歷史記錄
    go () {
      this.$router.go(-1)
    },
    // 取得常用參數
    getRoute () {
      // 取得路由的屬性
      // 範例：this.$route.fullPath (目前網址)
      // console.log(this.$route)
      // 呼叫路由的方法
      // 範例：this.$router.go(-1) (回到前一頁)
      console.log(this.$router)
    }
    // 延伸介紹
    // addRoute () {

    // }
  },
  // 沒辦法使用
  addRoute () {
    this.$router.getRoutes({
      path: '/newAbout',
      name: 'newAbout',
      component: () => import('./AboutView.vue')
    })
  }
}
</script>
