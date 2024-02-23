<template>
  <main>
    <h1>Скачать лаунчер</h1>
    <div class="dev-info">
      <span class="danger">Внимание!</span>
      <p>
        Перечисленные ниже версии предназначены для тестирования/ознакомления.
      </p>
      <span class="danger">Они не пригодны для работы в продакшене!!!</span>
    </div>
    <p class="text-center danger" v-if="!versionsData">
      Ошибка получения списка версий
    </p>
    <div class="list" v-else>
      <div
        class="version-block"
        v-for="(version, i) in versionsData.versions"
        :key="i"
      >
        <div class="info">
          <span>AuroraLauncher {{ version.version }}</span>
          <span class="dash">–</span>
          <span class="date"
            >Дата релиза: {{ new Date(version.date).toLocaleString() }}</span
          >
          <span v-if="version.dev" class="dev">dev</span>
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

<script setup lang="ts">
useSeoMeta({
  title: "Скачать лаунчер",
});

const { data: versionsData } = await useFetch<VersionsData>(
  "https://api.aurora-launcher.ru/versions",
  { server: false }
);

interface VersionsData {
  stable: string;
  dev: string;
  versions: Version[];
}

interface Version {
  version: string;
  date: Date;
  note: string;
  dev: boolean;
  files: Files;
}

interface Files {
  js: string;
  "binary-win": string;
  "binary-mac": string;
  "binary-linux": string;
}
</script>

<style lang="scss" scoped>
main {
  margin: 100px 0;
  min-height: calc(100vh - 360px);
}

h1 {
  text-align: center;
  margin: 1rem 0;
}

.dev-info {
  text-align: center;
  margin-bottom: 3rem;
  p {
    margin: 0.5rem 0;
  }
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
    margin: 0 10px;
  }
  .links {
    margin-left: auto;
    .btn {
      display: inline-block;
      margin: 5px;
    }
  }
}

.text-center {
  text-align: center;
}

.dev {
  display: inline-block;
  background-color: var(--danger);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
}
</style>
