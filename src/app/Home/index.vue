<template lang="pug">
  .home
    cover
    about
    qualities
    work-experience
    skills
</template>

<script>
import TriangleBackground from '@/app/Arch/TriangleBackground';
import Cover from './Cover';
import About from './About';
import Skills from './Skills';
import Qualities from './Qualities';
import WorkExperience from './WorkExperience';

export default {
  components: {
    Cover,
    About,
    Skills,
    Qualities,
    WorkExperience,
    TriangleBackground,
  },
  name: 'Home',
};
</script>
