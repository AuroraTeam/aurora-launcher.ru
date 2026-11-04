<template>
  <div class="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="sass">
@import 'modern-normalize/modern-normalize.css'

:root
  --primary: rgb(80, 128, 255)
  --primary-hover: rgb(0, 96, 192)
  --danger: #dc3545

html
  scroll-behavior: smooth

body
  min-height: 100vh
  display: flex
  flex-direction: column
  font-family: 'Comfortaa', sans-serif
  color: #fff
  background: #181818
  background-image: linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)
  background-size: 30px 30px
  // background-image: radial-gradient(circle, #222 1px, transparent 2px)
  // background-size: 30px 30px

a
  color: var(--primary)
  text-decoration: none
  &:hover
    color: #fff

img
  max-width: 100%

h1
    font-size: 2.5rem
    font-weight: 500

.container
  max-width: 1140px
  margin: auto
  padding: 0 15px

.btn
  color: #fff
  background-color: var(--primary)
  padding: 10px 14px
  border-radius: 20px
  transition-duration: 0.1s
  &:hover
    background-color: var(--primary-hover)
</style>
