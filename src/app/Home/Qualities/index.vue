<template lang="pug">
  v-container.pt-0#qualities
    v-subheader.px-0 QUALIDADES
    v-chip.ma-2(
      flat
      dark
      v-for="(quality, index) in items"
      :key="index"
      :color="quality.color"
      )
      | {{ quality.title }}
</template>

<script>
import QualitiesData from './QualitiesData';

export default {
  data: () => ({
    items: QualitiesData,
  }),
  name: 'Qualities',
};
</script>
