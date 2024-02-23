// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
        },
        // Icons
        { name: "theme-color", content: "#0080FF" },
        { name: "og:image", content: "/logo.png" },
      ],
      link: [
        // Icons
        {
          rel: "apple-touch-icon",
          href: "/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "any",
          href: "/favicons/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicons/icon.svg",
        },
        { rel: "manifest", href: "/favicons/manifest.webmanifest" },
        {
          rel: "yandex-tableau-widget",
          href: "/favicons/tableau.json",
        },
      ],
      // script: [
      //   { src: "https://jocat.ru/js/snow.min.js", tagPosition: "bodyClose" },
      // ],
    },
  },

  modules: [
    "@nuxtjs/google-fonts",
    "@artmizu/yandex-metrika-nuxt",
    "nuxt-icon",
  ],

  googleFonts: {
    families: {
      Comfortaa: [300, 400, 500, 700],
    },
  },
  yandexMetrika: {
    id: "68187730",
  },
});
