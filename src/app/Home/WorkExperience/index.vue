<template lang="pug">
  v-container.pt-0.mb-4#work-experience
    v-subheader.px-0 EXPERIÊNCIA PROFISSIONAL
    v-card.job.mb-3(
      flat
      color="grey lighten-3"
      v-for="(job, index) in items"
      :key="index"
      )
      v-card-text
        v-layout(align-center)
          v-avatar.grey.lighten-2
            v-icon business_center
          .job__title.ml-3
            h2 {{ job.title }}
            | {{ job.subtitle }}
          v-spacer
          v-chip.job__date.ma-0 {{ job.dateIn }} - {{ job.dateOut }}
</template>

<script>
import ExperienceData from './ExperienceData';

export default {
  data: () => ({
    items: ExperienceData,
  }),
  name: 'WorkExperience',
};
</script>
