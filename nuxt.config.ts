// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["@/assets/base.css"],
    ssr: true,
    nitro: {
        preset: 'node-server'
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' }
            ]
        }
    }
});
