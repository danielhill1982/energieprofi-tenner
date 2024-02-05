// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  plugins: ["~/plugins/preline.client.ts"],
  
  googleFonts: {
    preload: true, 
    families: { 
      Prompt: true
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  build: {
    transpile: ["gsap"]
  }

})
