import { defineStore } from 'pinia'

// 1. store名稱
// 2. 屬性參數
export default defineStore('User Store', {
  // Data
  state: () => ({
    name: '淡淡熊',
    wallet: 300
  }),
  // Computed
  getters: {
    getUserName: (state) => `我的名字叫做 ${state.name}`
  },
  // Methods
  actions: {
    // 可以使用this
    updateName () {
      this.name = '小明'
    }
  }
})
