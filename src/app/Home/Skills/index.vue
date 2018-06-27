<template lang="pug">
  .skills.grey-gradient
    v-container#skills(grid-list-lg)
      .text-xs-center.grey--text.text--darken-2 SKILLS
      v-layout.my-4(row wrap align-center justify-center)
        v-flex.text-xs-center(
          xs6
          md4
          lg3
          xl2
          v-for="(skill, index) in items"
          :key="index"
          )
          v-progress-circular(
            :size="100"
            :width="5"
            :rotate="360"
            :color="skill.color"
            :value="skill.score"
            )
            | {{ skill.title }}
</template>

<script>
import SkillsData from './SkillsData';

export default {
  data: () => ({
    items: SkillsData,
  }),
  name: 'Skills',
};
</script>

  <style lang="sass">
    .skills
      padding: 150px 0
      position: relative
      overflow: hidden

      &:after,
      &:before
        content: ''
        width: 0
        height: 0
        border-style: solid
        position: absolute
        left: 0

      &:before
        border-width: 100px 1920px 0 0
        border-color: #fafafa transparent transparent transparent
        top: 0

      &:after
        border-width: 0 0 100px 1920px
        border-color: transparent transparent #fafafa transparent
        bottom: 0
  </style>
