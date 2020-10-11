<template>
  <div>
    <main>
      <div class="container">
        <header class="row">
          <div class="col-12 col-md-5 col-lg-6 lead">
            <h1>Aurora Launcher</h1>
            <p>
              Лаунчер с удобной кастомизацией дизайна для игровых проектов
              Minecraft
            </p>
          </div>
          <div class="d-none d-md-block col-md-7 col-lg-6">
            <img class="img-fluid" src="/launcher.jpg" alt="" />
          </div>
        </header>
      </div>
      <div class="container">
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
      </div>
      <div class="container dev-progress">
        <strong>Прогресс разработки:</strong>
        <p>Aurora Launcher v0.1.0 is 6% complete</p>
      </div>
    </main>
    <footer>
      <div class="container">
        <div class="row align-items-center">
          <div class="d-none d-sm-block col-sm-2 col-lg-1">
            <Logo />
          </div>
          <div class="col-12 col-sm-10 col-md-8 col-lg-9">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a target="_blank" href="https://github.com/AuroraTeam"
                  >GitHub</a
                >
              </li>
              <li class="list-inline-item">
                <a target="_blank" href="https://discord.gg/2NvYTcv">Discord</a>
              </li>
            </ul>
            Aurora Team &copy; 2020
          </div>
          <div class="d-none d-md-block col-2 text-right align-self-start">
            by <a href="https://jocat.ru" target="_blank">JCat</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="sass" scoped>
header
  padding: 50px 0
  .lead
    padding-right: 50px
    display: flex
    flex-direction: column
    justify-content: center
  img
    border-radius: 10px
.advantages
  padding: 80px 0 20px
  font-size: 15px
  .block
    text-align: center
    margin-bottom: 80px
  .icon
    font-size: 32px
    margin: auto
    margin-bottom: 20px
    width: 72px
    line-height: 72px
    border-radius: 50%
    background-color: #7c4dff
    color: #fff
.dev-progress
  text-align: center
  padding: 20px 15px
  strong
    font-size: 28px
footer
  padding: 30px 0
</style>
