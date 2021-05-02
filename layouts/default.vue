<template>
  <div>
    <b-overlay
      :show="show"
      bg-color="#000"
      opacity="1"
      :fixed="true"
      :no-wrap="true"
    >
    </b-overlay>
    <video class="bgVideo" src="/background.mp4" muted autoplay loop></video>
    <div class="overlay"></div>
    <Header class="container" />
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
  background: #1a1a1a
  font-family: 'Comfortaa', sans-serif
  color: #fff

a
  color: var(--blue)
  &:hover
    color: #fff
    text-decoration: none

.bgVideo
  position: fixed
  width: 100vw
  height: 100vh
  object-fit: cover
  z-index: -2
.overlay
  position: fixed
  width: 100vw
  height: 100vh
  background: rgba(0, 0, 0, 0.4) url('/bg.png') fixed no-repeat
  z-index: -1
</style>

<script>
export default {
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
}
</script>
