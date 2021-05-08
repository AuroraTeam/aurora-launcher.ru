<template>
  <div>
    <nuxt-link :to="data.link">{{ data.title }}</nuxt-link>
    <ul v-if="data.childrens && data.childrens.length > 0">
      <li v-for="el in data.childrens" :key="el.link">
        <MenuElement :data="el" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ["data"]
})

export interface MenuElement {
  title: string
  link: string
  childrens?: MenuElement[]
}
</script>
