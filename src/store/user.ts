import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'zs',
  }),
  actions: {
    setName(name: string) {
      this.name = name
    }
  }
})
