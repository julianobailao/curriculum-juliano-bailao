<template lang="pug">
  v-app(v-scroll="onScroll")
    v-toolbar.main-topbar(
      app
      fixed
      :dark="toolbarDark"
      :class="toolbarStyle"
      )
      v-toolbar-items
        v-btn(flat v-scroll-to="{el: '#about'}") SOBRE
        v-btn(flat v-scroll-to="{el: '#work-experience'}") EXPERIÊNCIA
        v-btn(flat v-scroll-to="{el: '#skills'}") SKILLS
      v-spacer
      v-tooltip(bottom)
        v-btn(
          icon
          target="_BLANK"
          slot="activator"
          href="https://github.com/julianobailao"
          )
          v-icon.socicon-github(small)
        span Github
      v-tooltip(bottom)
        v-btn(
          icon
          target="_BLANK"
          slot="activator"
          href="https://www.linkedin.com/in/juliano-bail%C3%A3o-907331137/"
          )
          v-icon.socicon-linkedin(small)
        span Linkedin
      v-tooltip(bottom)
        v-btn(
          icon
          target="_BLANK"
          slot="activator"
          href="https://www.facebook.com/JulianoBailao"
          )
          v-icon.socicon-facebook(small)
        span Facebook
    v-content.pa-0
      router-view
</template>

<script>
export default {
  data: () => ({
    toolbarDark: true,
    toolbarStyle: {
      'dark transparent elevation-0': true,
    },
  }),
  methods: {
    onScroll() {
      const offsetTop = window.pageYOffset || document.documentElement.scrollTop;

      this.toolbarDark = offsetTop === 0;
      this.toolbarStyle = { 'transparent elevation-0': offsetTop === 0 };
    },
  },
  name: 'ResumeJulianoBailao',
};
</script>

<style lang="sass">
  html, body
    overflow: auto

  .main-topbar
    z-index: 3

  .primary-gradient
    background-image: linear-gradient(135deg, #282a36, #44475a)

  .grey-gradient
    background-image: linear-gradient(135deg, #f5f5f5, #eeeeee)

  .card.card--hover
    cursor: default !important

  .lighten-alpha-9
    background: rgba(255,255,255,.9)

  .lighten-alpha-6
    background: rgba(255,255,255,.6)
</style>
