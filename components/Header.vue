<template>
  <header>
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>
    <nav>
      <a target="_blank" href="https://docs.aurora-launcher.ru/"
        >Документация</a
      >
      <NuxtLink class="btn" to="/download">Скачать</NuxtLink>
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
      align-items: flex-end
      gap: 10px
    a
      color: #fff
      margin-left: 15px
      &:not(.btn):hover
        color: var(--primary)
</style>
