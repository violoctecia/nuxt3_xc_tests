// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/base.css"],
  ssr: true,
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [{ name: "robots", content: "noindex, nofollow" }],
    },
  },
});
