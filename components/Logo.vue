<template>
  <div class="logo">
    <img class="img-fluid" src="/logo.svg" alt="" />
    <span v-if="!hide" class="logo-text">Aurora Launcher</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hide?: boolean;
}>();
</script>

<style lang="sass" scoped>
.logo
  display: flex
  align-items: center
  font-size: 22px
  color: #fff
img
  height: 50px
  margin-right: 10px
.logo-text
  @media (max-width: 991px)
    display: none
</style>
