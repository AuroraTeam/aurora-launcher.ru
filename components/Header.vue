<template>
  <header>
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
    <nav>
      <a target="_blank" href="https://docs.aurora-launcher.ru/"
        >Документация</a
      >
      <nuxt-link class="btn btn-primary" to="/download">Скачать</nuxt-link>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
header
  padding: 15px 0
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
      margin-left: 15px
      &:not(.btn):hover
        color: var(--primary)
</style>
