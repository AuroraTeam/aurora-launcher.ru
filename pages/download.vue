<template>
  <main>
    <h1 class="text-center my-3">Скачать лаунчер</h1>
    <p class="text-center mb-5">
      <span class="danger">Внимание!</span><br />
      Перечисленные ниже версии предназначены для тестирования/ознакомления.<br />
      <span class="danger">Они не пригодны для работы в продакшене!!!</span>
    </p>
    <p class="text-center" v-if="versionsList.length === 0">
      Ошибка получения списка версий
    </p>
    <div class="list" v-else>
      <div class="version-block" v-for="(version, i) in versionsList" :key="i">
        <div class="info">
          <span>AuroraLauncher v{{ version.version }}</span>
          <span class="dash">–</span>
          <span class="date"
            >Дата релиза: {{ new Date(version.date).toLocaleString() }}</span
          >
        </div>
        <div class="links">
          <a
            v-if="version.files.js"
            :href="version.files.js"
            class="btn btn-primary"
            >JS</a
          >
          <a
            v-if="version.files['binary-win']"
            :href="version.files['binary-win']"
            class="btn btn-primary"
            >Windows</a
          >
          <a
            v-if="version.files['binary-linux']"
            :href="version.files['binary-linux']"
            class="btn btn-primary"
            >Linux</a
          >
          <a
            v-if="version.files['binary-mac']"
            :href="version.files['binary-mac']"
            class="btn btn-primary"
            >MacOS</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin: 100px 0;
  min-height: calc(100vh - 360px);
}

.danger {
  color: var(--danger);
  font-size: 22px;
}
.version-block {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    .links {
      margin: auto;
      margin-top: 8px;
    }
  }
  @media (max-width: 767px) {
    .dash {
      height: 4px;
      display: block;
      visibility: hidden;
    }
  }
  .dash {
    margin: 0 8px;
  }
  .links {
    margin-left: auto;
    .btn {
      margin: 8px 5px;
      padding: 6px 18px;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      versionsList: [],
    }
  },
  async mounted() {
    const request = await fetch('https://api.aurora-launcher.ru/versions')
    const data = await request.json()
    this.versionsList = data.versions
  },
})
</script>
