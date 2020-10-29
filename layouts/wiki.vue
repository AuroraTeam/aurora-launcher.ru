<template>
  <div>
    <Header />
    <main class="d-flex">
      <LeftAside />
      <Nuxt />
      <RightAside />
    </main>
    <!-- <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"
    />
    <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-core.min.js"
      integrity="sha256-Y+Budm2wBEjYjbH0qcJRmLuRBFpXd0VKxl6XhdS4hgA="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/autoloader/prism-autoloader.min.js"
      integrity="sha256-ht8ay6ZTPZfuixYB99I5oRpCLsCq7Do2LjEYLwbe+X8="
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css"
      integrity="sha256-Ykz0nNWK7w4QWJUYR7OraN4773aMB/11aMt1nZyrhuQ="
      crossorigin="anonymous"
    /> -->
  </div>
</template>

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
.head
  font-weight: 300
</style>
