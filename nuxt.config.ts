// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    modules: ['@nuxtjs/tailwindcss'],
    app: {
      head : {
        title: 'Nuxt App Tino',
        meta : [
          { name : 'description', content: 'Everythig About Nuxt 3'}
        ],
        link: [
          {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
      }
    }
})