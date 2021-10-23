<template>
  <main>
    <header class="row">
      <div class="col-12 col-md-5 col-lg-6 lead">
        <h1>Aurora Launcher</h1>
        <p>
          Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft
        </p>
      </div>
      <div class="d-none d-md-block col-md-7 col-lg-6">
        <img class="img-fluid" src="/launcher.jpg" alt="" />
      </div>
    </header>
    <div class="row advantages">
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="palette" />
        </div>
        Легкая и удобная кастомизация интерфейса
      </div>
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="book" />
        </div>
        Понятная документация, адекватный вывод ошибок
      </div>
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="server" />
        </div>
        Возможность скачивания файлов через CDN
      </div>
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="code" />
        </div>
        Открытый исходный код
      </div>
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="rocket" />
        </div>
        Использование протокола WebSocket для обмена данными
      </div>
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="cubes" />
        </div>
        Возможность расширения функцианала с помощью модулей
      </div>
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="bomb" />
        </div>
        Отсутствие зависимости от Java и JavaFX
      </div>
      <div class="col-12 col-sm-6 col-lg-3 block">
        <div class="icon">
          <font-awesome-icon icon="star" />
        </div>
        И многое другое
      </div>
    </div>
    <div class="dev-progress">
      <strong>Прогресс разработки:</strong>
      <p>Aurora Launcher v0.1.0 is 50% complete</p>
    </div>
  </main>
</template>

<style lang="sass" scoped>
header
  padding: 120px 0
  .lead
    padding-right: 50px
    display: flex
    flex-direction: column
    justify-content: center
  img
    border-radius: 10px
.advantages
  padding: 50px 0 20px
  font-size: 15px
  .block
    text-align: center
    margin-bottom: 80px
    font-weight: 300
  .icon
    font-size: 32px
    margin: auto
    margin-bottom: 20px
    width: 72px
    line-height: 72px
    border-radius: 20px
    background-color: #7c4dff
    color: #fff
    // box-shadow: 6px -6px 2px 0px rgb(124 77 255 / 50%), 12px -12px 2px 0px rgb(124 77 255 / 25%)
.dev-progress
  text-align: center
  padding: 80px 0
  strong
    font-size: 28px
</style>
