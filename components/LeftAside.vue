<template>
  <aside :class="showMenu ? 'open' : ''">
    <div class="menu">
      <MenuElement v-for="el in menu" :key="el.link" :data="el" />
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
import { MenuElement } from './MenuElement.vue'

export default Vue.extend({
  data() {
    return {
      showMenu: false,
      menu: [
        {
          title: "Базовая настройка",
          link: "/wiki/0.1.0/basic",
          childrens: [
            {
              title: "Начало работы",
              link: "/wiki/0.1.0/basic/introduction"
            },
            {
              title: "Загрузка клиентов",
              link: "/wiki/0.1.0/basic/clients"
            }
          ]
        },
        {
          title: "Для разработчиков",
          link: "/wiki/0.1.0/for-developers",
          childrens: [
            {
              title: "API",
              link: "/wiki/0.1.0/for-developers/api"
            },
            {
              title: "Альтернативные зеркала",
              link: "/wiki/0.1.0/for-developers/mirrors"
            }
          ]
        }
      ] as MenuElement[]
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
