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
  // background: url('/bg.png') fixed no-repeat, #111 url('/ny_bg.png') fixed // Happy New Year Yopta
  background: #1a1a1a url('/bg.png') fixed no-repeat
  font-family: 'Comfortaa', sans-serif
  color: #fff

a
  color: var(--blue)
  &:hover
    color: #fff
    text-decoration: none
</style>
