<template lang="pug">
  v-container.mt-4#about
    v-subheader.pa-0 INFORMAÇÕES PESSOAIS
    v-layout(row align-center justify-space-between)
      .information
        strong Nome:
        br
        |  Juliano Bailão
      .information
        strong Data de nascimento:
        br
        |  23 de Dezembro 1990
      .information
        strong Localidade:
        br
        |  Maringa - PR
      .information
        strong Celular / Whatsapp:
        br
        |  (44) 999-421-966
      .information
        strong Email:
        br
        |  julianobailao@gmail.com
    v-subheader.pa-0 SOBRE
    p Meu primeiro emprego como programador foi aos 16 anos, naquela época não separávamos entre front-end ou back-end, éramos chamados de webdesigners. Muita coisa mudou e continua mudando, e eu estou sempre buscando me manter atualizado tanto no back, quanto no front. Hoje, no meu emprego atual, atuo como líder técnico de uma equipe de 10 pessoas. Somos a equipe responsável pelo front-end de todos os projetos da empresa. O que mais utilizamos aqui é o VueJs, porém também mexemos com react, react-native e angular. Trabalhos em projetos de grande porte como aplicações bancárias, financeiras e projetos com um quantidade elevada de usuários.
    p Já ministrei 2 workshops trainees para trazer novos talentos para a empresa, e os dois foram um grande sucesso. O primeiro deles focado em front-end com Vuejs, e o segundo para back-end em Java. Além de programar, gosto muito de ensinar, e repassar meu conhecimento adiante.
    p Sou entusiasta de javascript, e opensource. Já tive a honra de contribuir em grandes projetos como Laravel e TNT Search. Isso me ajuda a me manter atualizado e me proporciona grandes desafios. Caso tenha interesse, podemos marcar de conversar melhor sobre o que achar necessario.


</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="sass">
  .mt-negative
    position: relative
    z-index: 2
    margin-top: -80px

    &.mt-negative--down
      z-index: 1
      padding-top: 60px
</style>
