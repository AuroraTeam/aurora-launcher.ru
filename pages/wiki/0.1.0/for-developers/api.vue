<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'wiki',
  head: {
    title: 'API',
  },
})
</script>

<template lang="md">
# API {.head}

Описание API лаунчсервера {.lead}

## Общая информация

API для общения лаунчера/сервер-враппера с лаунчер-сервером реализован посредством клиент-серверного подключения.
Обмен данными осуществляется по websocket каналу в формате json.

Примеры типизации request/response на ЯП Typescript:

```ts
interface Request {
  type: string
  uuid: uuidv4
  data: object
}

interface Response {
  uuid: uuidv4
  data: object
}
```

При возврате ошибки используется следующий тип:

```ts
interface ResponseError {
  uuid: uuidv4
  code: number
  message: string
}
```

В данных примерах `uuidv4` реализует тип строки являющийся валидным <a href="https://ru.wikipedia.org/wiki/UUID#Версия_4_(случайный)" target="_blank">uuidv4 идентификатором</a>.

Для отправки запросов на лаунчер-сервер из браузера или Node.js сервера, вы можете использовать оффициальную библиотеку <a href="https://www.npmjs.com/package/aurora-api" target="_blank">AuroraAPI</a>.

## Типы запросов

В стадии заполнения
</template>
