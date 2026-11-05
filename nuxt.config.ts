// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-06",
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        {
          name: "og:title",
          content: "Aurora Launcher",
        },
        {
          name: "description",
          content: "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
        },
        {
          name: "og:description",
          content: "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
        },
        {
          name: "og:url",
          content: "https://aurora-launcher.ru/",
        },
        // Icons
        { name: "theme-color", content: "#0080FF" },
        { name: "og:image", content: "/logo_wide.png" },
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
      ],
      script: [
        // { src: "https://jocat.ru/js/snow.min.js", tagPosition: "bodyClose" },
        {
          src: "https://umami.jocat.ru/script.js",
          tagPosition: "bodyClose",
          defer: true,
          "data-website-id": "b8fc81f9-bca9-406d-9a63-9d591fb5e2d2",
        },
      ],
    },
  },

  modules: ["@nuxt/fonts", "@nuxt/icon/module"],
});
