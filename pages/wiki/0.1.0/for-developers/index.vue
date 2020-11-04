<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'wiki',
  mounted() {
    this.$router.replace('/wiki/0.1.0/for-developers/api')
  },
  head: {
    title: 'Для разработчиков',
  },
})
</script>

<template lang="md"></template>
