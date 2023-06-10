<template>
  <div class="test">
    <div @click="theme = 'light'">浅色</div>
    <div @click="theme = 'dark'">深色</div>
  </div>
</template>
<script setup lang="ts">
import useTheme from '@/hooks/useTheme.ts'

const { theme } = useTheme()
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
