<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$router.replace('/wiki/0.1.0/for-developers/mirrors')
  },
  head: {
    title: 'Для разработчиков',
  },
})
</script>

<template>
  <p>redirect</p>
</template>
