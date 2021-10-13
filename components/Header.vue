<template>
  <header>
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
    <nav>
      <nuxt-link to="/roadmap">Дорожная карта</nuxt-link>
      <a target="_blank" href="https://docs.aurora-launcher.ru/"
        >Документация</a
      >
      <nuxt-link class="btn btn-primary" to="/download">Скачать</nuxt-link>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
header
  padding: 10px 15px
  display: flex
  align-items: center
  justify-content: space-between
  nav
    @media (max-width: 575px)
      display: flex
      flex-direction: column
      text-align: right
    a
      color: #fff
      margin-left: 10px
      &:not(.btn):hover
        color: var(--blue)
</style>
