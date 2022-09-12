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
  --primary: #007bff

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
  // background: #111 url('/ny_bg.png')
  // background-size: 100%
  background: #181818
a
  color: var(--primary)
  &:hover
    color: #fff
    text-decoration: none

.btn
  border-radius: 19px
</style>
