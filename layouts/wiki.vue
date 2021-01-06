<template>
  <div>
    <Header />
    <main class="d-flex">
      <LeftAside />
      <Nuxt />
      <RightAside />
    </main>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
      ;(function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            ;(m[i].a = m[i].a || []).push(arguments)
          }
        m[i].l = 1 * new Date()
        ;(k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a)
      })(
        window,
        document,
        'script',
        'https://mc.yandex.ru/metrika/tag.js',
        'ym'
      )

      ym(68187730, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      })
    </script>
    <noscript
      ><div>
        <img
          src="https://mc.yandex.ru/watch/68187730"
          style="position: absolute; left: -9999px"
          alt=""
        /></div
    ></noscript>
    <!-- /Yandex.Metrika counter -->
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

section
  width: calc(100vw - 440px)
  min-height: calc(100vh - 70px)
  padding: 2rem 3rem
  background-color: #fff
  color: #000
  padding: 15px 30px
  font-family: 'Rubik', sans-serif
  @media (max-width: 1024px)
    width: 100%
  a:hover
    color: #000
.head
  font-weight: 300
</style>
