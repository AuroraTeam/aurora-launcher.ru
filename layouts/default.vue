<template>
  <div>
    <Header />
    <Nuxt />
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
  background: url('/bg.png') fixed no-repeat, #111 url('/ny_bg.png') fixed
  // background: #222 url('/bg.png') fixed no-repeat
  font-family: 'Comfortaa', sans-serif
  color: #fff

a
  color: var(--blue)
  &:hover
    color: #fff
    text-decoration: none
</style>
