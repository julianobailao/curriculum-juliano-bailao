<template lang="pug">
  v-container.cover.primary-gradient(fluid fill-height)
    triangle-background
    v-layout.cover__content(column align-center justify-center)
      v-avatar.elevation-12(size="200")
        img(
          src="https://pt.gravatar.com/userimage/10952529/98b2835f144b5651da4985bec19a49a5.jpg?size=200"
          alt="Profile picture"
          )
      .content__info.white--text.mt-5.text-xs-center
        .info__first-name JULIANO
        .info__last-name BAILÃO
        .info__job.mt-3 DESENVOLVEDOR WEB
</template>

<script>
import AnimatedSvgIcon from '@/app/Arch/AnimatedSvgIcon';
import TriangleBackground from '@/app/Arch/TriangleBackground';

export default {
  components: {
    AnimatedSvgIcon,
    TriangleBackground,
  },
  data: () => ({
    height: window.innerHeight,
  }),
  name: 'Cover',
};
</script>

<style lang="sass">
  .cover
    height: calc(100vh + 150px)
    position: relative
    overflow: hidden

    &:after
      content: ''
      width: 0
      height: 0
      border-style: solid
      border-width: 0 0 150px 1920px
      border-color: transparent transparent #fafafa transparent
      position: absolute
      left: 0
      bottom: 0

    .cover__content
      position: relative
      z-index: 2

      .content__info

        .info__first-name
          font-size: 72px
          line-height: 72px

        .info__last-name
          font-size: 84px
          line-height: 84px
          font-weight: bold

        .info__job
          color: #f1fa8c
          font-size: 22px
          line-height: 22px
</style>
