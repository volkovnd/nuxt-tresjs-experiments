// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@tresjs/nuxt'
  ],
  devtools: {
    enabled: true,
    telemetry: false
  },
  app: {
    head: {
      link: [
        {
          rel: 'shortcut icon',
          href: `${import.meta.env.NUXT_APP_BASE_URL || '/'}favicon.ico`
        }
      ]
    }
  },
  compatibilityDate: '2025-05-15',
  telemetry: {
    enabled: false
  },
  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true
      },
      stylistic: {
        semi: false,
        arrowParens: true,
        blockSpacing: true,
        commaDangle: 'never',
        indent: 2,
        quotes: 'single'
      }
    }
  },
  tres: {
    devtools: true
  }
})
