<template>
  <div class="container">
    <b-overlay
      :show="show"
      bg-color="#000"
      opacity="1"
      :fixed="true"
      :no-wrap="true"
    />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      show: true,
    }
  },
  mounted() {
    if (document.readyState === 'complete') {
      this.show = false
    }
    window.onload = () => {
      this.show = false
    }
  },
})
</script>

<style lang="sass">
\:root
  --blue: #2575fc

*
  box-sizing: border-box

html
  scroll-behavior: smooth

body
  margin: 0
  min-height: 100vh
  display: flex
  flex-direction: column
  font-family: 'Comfortaa', sans-serif
  color: #fff
  background: url('/bg.png') no-repeat, #111 url('/ny_bg.png')
  // background: #181818 url('/bg.png') no-repeat

a
  color: var(--blue)
  &:hover
    color: #fff
    text-decoration: none

.btn
  border-radius: 19px
</style>
