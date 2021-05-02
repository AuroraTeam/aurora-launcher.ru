<template>
  <div>
    <Header class="wiki-header" />
    <main class="d-flex">
      <LeftAside />
      <Nuxt />
      <RightAside />
    </main>
  </div>
</template>

<script lang="ts">
import 'highlight.js/styles/monokai.css'
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="sass">
aside
  width: 220px
  min-height: calc(100vh - 70px)
  background-color: #fafafa
  @media (max-width: 1024px)
    width: 100%
    position: fixed
    transition-duration: 1s
  .menu
    padding: 20px 15px
    ul
      list-style: none
      padding-left: 10px
    li a
      font-size: 14px
      color: #888
      &.active
        color: #555
    a
      color: #555
      font-size: 16px
      text-decoration: none
      display: block
      &.active
        font-weight: 600
        color: #333
      &:hover
        color: #000
  .btn
    display: none
    @media (max-width: 1024px)
      display: flex
      border: none
      border-bottom: 1px solid #eee
      background: #fafafa
      position: absolute
      top: 0
      &:focus
        outline: 0

.wiki-header
  margin: auto

.wiki-header,
section
  width: calc(100% - 440px)
  @media (max-width: 1024px)
    width: 100%

section
  min-height: calc(100vh - 70px)
  background-color: #fff
  color: #000
  padding: 15px 30px
  font-family: 'Rubik', sans-serif
  a:hover
    color: #000
.head
  font-weight: 300
</style>
