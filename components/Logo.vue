<template>
  <div class="logo">
    <img class="img-fluid" src="/logo.png" alt="" />
    <span class="logo-text">Aurora Launcher</span>
  </div>
</template>

<style lang="sass" scoped>
.logo
  display: flex
  align-items: center
  font-size: 22px
  color: #fff
img
  filter: contrast(0) brightness(2)
  height: 50px
  margin-right: 10px
.logo-text
  @media (max-width: 767px)
    display: none
</style>
