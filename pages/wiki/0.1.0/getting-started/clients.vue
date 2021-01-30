<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'wiki',
  head: {
    title: 'Игровые клиенты',
  },
})
</script>

<template lang="md">
# Игровые клиенты {.head}

Описание загрузки игрового клиента на лаунчсервер {.lead}

При сборке клиента можно пойти 2-мя путями:

- Сборка вручную
- Использование готовых клиентов с зеркал

Первый вариант для продвинутых пользователей, описан [здесь](https://github.com/AuroraTeam/AuroraAPI-Specification/blob/main/MOJANG_DOWNLOAD.md).  
Описание второго вы увидите ниже.

В лаунчере имеется 2 набора команд:

- Для скачивания клиентов с пользовательских зеркал: `downloadassets` и `downloadclient`
- Для скачивания клиентов с зеркала Mojang: `downloadmojangassets` и `downloadmojangclient`

Для этого вам нужно выбрать версию и методом последовательного ввода команд, скачать себе нужные файлы.  
Например вы хотите скачать клиент версии 1.12.2 с официального зеркала Mojang.  
Для этого вам нужно загрузить ассеты и клиент с помошью команд:  
`downloadmojangassets 1.12.2 assets1.12.2`, где `assets1.12.2` название папки в которую сохранятся ассеты  
`downloadmojangclient 1.12.2 TestClient`, где `TestClient` название папки в которую сохранится клиент
</template>
