<template>
  <header class="container">
    <nuxt-link class="logo" to="/">
      <Logo />
      Aurora Launcher
    </nuxt-link>
    <nav>
      <nuxt-link to="/roadmap">Дорожная карта</nuxt-link>
      <nuxt-link to="/wiki">База знаний</nuxt-link>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
header,
.logo
  display: flex
  align-items: center

header
  padding: 10px 15px
  nav
    margin-left: auto
    a
      color: #fff
      margin-left: 10px
      &:hover
        color: var(--blue)
  .logo
    font-size: 22px
    color: #fff
    img
      height: 50px
      margin-right: 10px
</style>
