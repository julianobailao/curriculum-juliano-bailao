<template lang="pug">
- var n = 0;
  .triangle-background
    while n < 300
      .triangle.animated(
        :key=n++
        :class="{'animated': animated}"
        )
</template>

<script>
export default {
  props: {
    animated: {
      type: Boolean,
      default: true,
    },
  },
  name: 'TriangleBackground',
};
</script>

<style lang="sass">
  $total: 300
  $time: 60s

  .triangle-background
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    overflow: hidden
    transform-style: preserve-3d
    perspective: 4000px

  .triangle
    height: 0
    width: 0
    position: absolute
    top: 0
    left: 0

  @for $i from 1 through $total
    $size: random(90) * 1px
    $rotate: random(360) * 1deg
    .triangle.animated:nth-child(#{$i})
      border-top: $size solid #44475a
      border-right: $size solid transparent
      border-left: $size solid transparent
      transform: rotate($rotate) translate3d(50%,50%,0) scale(0)
      animation: anim#{$i} $time infinite linear
      animation-delay: $i * -($time/$total)

    @keyframes anim#{$i}
      50%
        opacity: .1
      100%
        opacity: 0
        transform: rotate($rotate * 1.5) translate3d(random(4000) * 1px, random(4000) * 1px, 1920px) scale(1)
</style>
