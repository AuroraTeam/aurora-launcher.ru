<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="sass">
\:root
  --blue: #2575fc

*
  box-sizing: border-box

html
  scroll-behavior: smooth

body
  margin: 0
  height: 100vh
  display: flex
  flex-direction: column
  background: #222 url('/bg.png') fixed
  background-size: cover
  font-family: 'Comfortaa', sans-serif
  color: #fff

a
  color: var(--blue)
  &:hover
    color: #fff
    text-decoration: none
</style>
