<template>
  <aside id="js__aside" class="second" :class="showMenu ? 'open' : ''">
    <div class="menu">
      <MenuElement v-for="el in menu" :key="el.link" :data="el" />
    </div>
    <button
      class="btn"
      data-side="right"
      data-toggle="false"
      @click.prevent="menuToggle()"
    >
      <i class="fas fa-arrow-left"></i>
      <font-awesome-icon v-if="!showMenu" icon="angle-left" />
      <font-awesome-icon v-if="showMenu" icon="angle-right" />
    </button>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { MenuElement } from './MenuElement.vue'

export default Vue.extend({
  data() {
    return {
      showMenu: false,
      menu: [] as MenuElement[],
    }
  },
  methods: {
    menuToggle() {
      this.showMenu = !this.showMenu
    },
  },
})
</script>

<style lang="sass" scoped>
aside
  border-left: 1px solid #eee
  .menu a.offset
    font-size: 14px
    padding-left: 1rem
  @media (max-width: 1024px)
    left: 100%
    &.open
      left: 75%
    .btn
      left: -33px
      border-left: 1px solid #eee
      border-bottom-left-radius: 10px
    .menu
      margin-right: 75%
  @media (max-width: 768px)
    &.open
      left: 70%
    .menu
      margin-right: 70%
  @media (max-width: 576px)
    &.open
      left: 50%
    .menu
      margin-right: 50%
  @media (max-width: 350px)
    &.open
      left: 40%
    .menu
      margin-right: 40%
</style>
