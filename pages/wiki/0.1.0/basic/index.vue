<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'wiki',
  created() {
    this.$router.replace('/wiki/0.1.0/basic/introduction')
  },
  head: {
    title: 'Основное',
  },
})
</script>

<template></template>
