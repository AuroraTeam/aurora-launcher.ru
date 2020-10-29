<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$router.replace('/wiki/0.1.0/getting-started/introduction')
  },
  head: {
    title: 'Основное',
  },
})
</script>

<template>
  <p>redirect</p>
</template>
