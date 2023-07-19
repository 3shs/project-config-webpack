<template>
  <div class="test">
    <h1>{{ user.name }}</h1>
    <button @click="handleClick">改变名称</button>
    <div @click="theme = 'light'">浅色</div>
    <div @click="theme = 'dark'">深色</div>
  </div>
</template>
<script setup lang="ts">
import useTheme from '@/hooks/useTheme.ts'
import { useUserStore } from '@/store/user.ts'
const { theme } = useTheme()
const user = useUserStore()
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const handleClick = () => {
  if (user.name === 'zs') {
    user.setName('ls')
  } else {
    user.setName('zs')
  }
}

1

2
</script>
<style lang="scss" scoped>
.test {
  width: 100%;
  height: 100%;
  @include useTheme() {
    background-color: getVar('bgColor');
    color: getVar('textColor');
  }
}
</style>
