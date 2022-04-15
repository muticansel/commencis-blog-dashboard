import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: 'Bedirhan',
    isLoggedIn: false,
  }),
  getters: {
    usernameUpper: state => state.username.toLocaleUpperCase(),
  },
  actions: {
    increment() {
      this.username += 'asdqwert'
    },
  },
})
