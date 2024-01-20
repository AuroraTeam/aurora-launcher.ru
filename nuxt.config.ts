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
        { name: "msapplication-TileColor", content: "#2d89ef" },
        {
          name: "msapplication-config",
          content: "/favicons/browserconfig.xml",
        },
        { name: "theme-color", content: "#ffffff" },
        { name: "og:image", content: "/logo.png" },
      ],
      link: [
        // Icons
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicons/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/favicons/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
        { rel: "shortcut icon", href: "/favicons/favicon.ico" },
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
