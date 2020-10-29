<template>
  <div class="container">
    <p class="info">
      Данный раздел будет наполняться параллельно разработке лаунчера<br />
      <nuxt-link to="/wiki/0.1.0">v0.1.0</nuxt-link>
    </p>
  </div>
</template>

<style lang="sass" scoped>
.info
  text-align: center
  font-size: 24px
  padding: 50px 0
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  template: 'wiki',
})
</script>
