<template lang="pug">
  .animated-svg-icon.text-xs-center(
    :id="iconId"
    :style="'height:' + this.size + 'px;'"
    v-observe-visibility="loadIcon"
    )
</template>

<script>
import Vivus from 'vivus';

export default {
  props: {
    file: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: 128,
    },
    duration: {
      type: Number,
      default: 300,
    },
    type: {
      type: String,
      default: 'oneByOne',
    },
  },
  computed: {
    iconId() {
      return `icon-${this._uid}`;
    },
  },
  methods: {
    loadIcon(isVisible) {
      const oldSvg = this.$el.querySelector('svg');

      if (oldSvg) {
        oldSvg.remove();
      }

      this.$el.classList[isVisible ? 'add' : 'remove']('show');

      if (isVisible) {
        return new Vivus(
          this.iconId,
          {
            type: this.type,
            file: this.file,
            duration: this.duration,
            onReady: (icon) => {
              icon.el.setAttribute('width', this.size);
              icon.el.setAttribute('height', this.size);
            },
          }, (icon) => {
            icon.el.classList.add('loaded');
          },
        );
      }

      return false;
    },
  },
  name: 'AnimatedSvgIcon',
};
</script>

<style lang="sass">
  .animated-svg-icon
    opacity: 0

    &.show
      opacity: 1

    &.dark
      svg
        #Black
          path,
          polygon
            stroke: #ffffff

    svg
      #Black
        path,
        polygon
          stroke: #333333

    #Frames-24px
      display: none
</style>
