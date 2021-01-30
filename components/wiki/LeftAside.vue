<template>
  <aside :class="showMenu ? 'open' : ''">
    <div class="menu">
      <nuxt-link to="/wiki/0.1.0/getting-started">Базовая настройка</nuxt-link>
      <ul>
        <li>
          <nuxt-link to="/wiki/0.1.0/getting-started/clients"
            >Загрузка клиентов</nuxt-link
          >
        </li>
      </ul>
      <nuxt-link to="/wiki/0.1.0/for-developers">Для разработчиков</nuxt-link>
      <ul>
        <li>
          <nuxt-link to="/wiki/0.1.0/for-developers/api">API</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/wiki/0.1.0/for-developers/mirrors"
            >Альтернативные зеркала</nuxt-link
          >
        </li>
      </ul>
    </div>
    <button
      class="btn"
      data-side="left"
      data-toggle="false"
      @click.prevent="menuToggle()"
    >
      <font-awesome-icon v-if="!showMenu" icon="angle-right" />
      <font-awesome-icon v-if="showMenu" icon="angle-left" />
    </button>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    menuToggle() {
      this.showMenu = !this.showMenu
    },
  },
})

// TODO Автоматизировать менюшку
</script>

<style lang="sass" scoped>
aside
  border-right: 1px solid #eee
  @media (max-width: 1024px)
    right: 100%
    &.open
      right: 75%
    .btn
      right: -33px
      border-right: 1px solid #eee
      border-bottom-right-radius: 10px
    .menu
      margin-left: 75%
  @media (max-width: 768px)
    &.open
      right: 70%
    .menu
      margin-left: 70%
  @media (max-width: 576px)
    &.open
      right: 50%
    .menu
      margin-left: 50%
  @media (max-width: 350px)
    &.open
      right: 40%
    .menu
      margin-left: 40%
</style>
