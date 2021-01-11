<template>
  <div class="container">
    <h1 class="text-center my-3">Дорожная карта</h1>
    <p class="text-center mb-5">
      Внимание! На данный момент все даты указаны приблизительно и могут
      меняться в дальнейшем.<br />
      Следите за новостями на нашем
      <a href="https://discord.gg/2NvYTcv">Discord</a> сервере.
    </p>
    <ul class="timeline">
      <li class="event" data-date="Февраль 2020">
        <h3>Реализация базового функционала, ЗБТ</h3>
        <p>
          На данный момент реализована большая часть базового функционала. Со
          временем будет дописана оставшаяся часть и протестирована
          тестировщиками.
        </p>
      </li>
      <li class="event" data-date="Апрель 2020">
        <h3>
          Предрелизные сборки, написание документации, открытие исходников
        </h3>
        <p>
          По окончанию первых тестов, будут исправлены ошибки (если такие
          будут), а также написана документация и открыты исходники.
        </p>
      </li>
      <li class="event" data-date="Май 2020">
        <h3>Релиз v1.0</h3>
        <p>
          После того как всё будет готово, будет выпущена первая релизная
          версия, Ура!!!
        </p>
      </li>
      <li class="event" data-date="Лето 2020 - ∞">
        <h3>Дальнейшая разработка</h3>
        <p>
          После релиза мы не остановимся на достигнутом и продолжим разработку
          лаунчера наполняя его новым функционалом и улучшая то что уже имеется.
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.timeline {
  border-left: 3px solid #7c4dff;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  letter-spacing: 0.2px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  max-width: 70%;
}

@media (max-width: 767px) {
  .timeline {
    max-width: 98%;
    padding: 25px;
  }
}

.timeline h1 {
  font-weight: 300;
  font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10px;
}

.timeline .event {
  border-bottom: 1px dashed #e8ebf1;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

@media (max-width: 767px) {
  .timeline .event {
    padding-top: 30px;
  }
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -207px;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}

@media (max-width: 767px) {
  .timeline .event:before {
    left: 0px;
    text-align: left;
  }
}

.timeline .event:after {
  -webkit-box-shadow: 0 0 0 3px #7c4dff;
  box-shadow: 0 0 0 3px #7c4dff;
  left: -55.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: '';
  top: 5px;
}

@media (max-width: 767px) {
  .timeline .event:after {
    left: -31.8px;
  }
}
</style>
