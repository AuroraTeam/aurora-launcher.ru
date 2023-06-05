<template>
  <main>
    <div class="lead">
      <div class="lead-text">
        <h1>Aurora Launcher</h1>
        <p>
          Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft
        </p>
      </div>
      <div>
        <img src="/launcher.png" alt="Launcher" />
      </div>
    </div>
    <div class="advantages">
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:palette" />
        </div>
        Легкая и удобная кастомизация интерфейса
      </div>
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:book" />
        </div>
        Понятная документация, адекватный вывод ошибок
      </div>
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:server" />
        </div>
        Возможность скачивания файлов через CDN
      </div>
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:code" />
        </div>
        Открытый исходный код
      </div>
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:rocket" />
        </div>
        Использование протокола WebSocket для обмена данными
      </div>
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:cubes" />
        </div>
        Возможность расширения функционала с помощью модулей
      </div>
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:bomb" />
        </div>
        Отсутствие зависимости от Java и JavaFX
      </div>
      <div class="block">
        <div class="icon-block">
          <Icon name="fa6-solid:star" />
        </div>
        И многое другое
      </div>
    </div>
    <div class="dev-progress">
      <strong>Прогресс разработки:</strong>
      <p>Aurora Launcher v0.1.0 is 60% complete</p>
    </div>
  </main>
</template>

<style lang="sass" scoped>
.lead
  padding: 120px 0
  display: flex
  flex-wrap: wrap
  align-items: center
  > div
    width: 50%
    @media (max-width: 767px)
      width: 100%
  .lead-text
    padding-right: 4rem
    h1
      margin: 0
      margin-bottom: 0.5rem
    p
      font-size: 1.25em
      line-height: 1.75rem
      font-weight: 300
      margin: 0
  img
    border-radius: 10px
    @media (max-width: 767px)
      margin-top: 1rem
.advantages
  padding: 50px 0 20px
  font-size: 15px
  display: flex
  flex-wrap: wrap
  margin: 0 -15px

  .block
    width: 25%
    padding: 0 15px
    text-align: center
    margin-bottom: 80px
    font-weight: 300
    @media (max-width: 767px)
      width: 50%
    @media (max-width: 575px)
      width: 100%
  .icon-block
    font-size: 32px
    margin: auto
    margin-bottom: 20px
    width: 72px
    line-height: 72px
    border-radius: 20px
    background-color: var(--primary)
    // box-shadow: 6px -6px 2px 0px rgb(124 77 255 / 50%), 12px -12px 2px 0px rgb(124 77 255 / 25%)
.dev-progress
  text-align: center
  padding: 80px 0
  strong
    font-size: 28px
</style>
