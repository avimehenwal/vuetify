<template>
  <section
    id="home"
    :class="!$vuetify.theme.dark && 'white'"
  >
    <home-hero />

    <home-tidelift />

    <home-feature />

    <home-sponsors />

    <home-premium-themes />

    <home-made-with-vuetify />
  </section>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      HomeHero: () => import('./components/Hero'),
      HomeTidelift: () => import('./components/Tidelift'),
      HomeFeature: () => import('./components/Feature'),
      HomeSponsors: () => import('./components/Sponsors'),
      HomePremiumThemes: () => import('./components/PremiumThemes'),
      HomeMadeWithVuetify: () => import('./components/MadeWithVuetify'),
    },
  }
</script>

<style lang="sass">
  .mono
    font-family: 'Roboto Mono', monospace !important
</style>
