<template>
  <div class="contentHome">
    <div class="leftContentHome">
      <div class="typerBlock">
        <vue-typer
          caret-animation='smooth'
          :type-delay='70'
          :pre-erase-delay='3000'
          :text=descriptionTyper>
        </vue-typer>
      </div>
      <div class="links block">
        <div class="linkNavigation"></div>
        <div class="linkNavigation"></div>
        <div class="linkNavigation"></div>
      </div>
    </div>
    <bg-glitch></bg-glitch>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import TextGlitch from 'vue-text-glitch'
import bgGlitch from 'src/components/UI_components/bgGlitch'
export default {
  name: 'home',
  components: {
    TextGlitch,
    VueTyper,
    bgGlitch
  },
  data () {
    return {
      descriptionTyper: [
        'Hello there!',
        'Let me not tell you a lot about myself...',
        'My name is Vlad,and I use a nickname ElSolo',
        'This site is made specifically for demonstrating my portfolio and my skills',
        `I have been working as a front-end developer for about two years`,
        `Most of all in this area I'm attracted to JavaScript`,
        `I use Vue.js, Node.js and Quasar Framework for mobile app`,
        `I want to continue to study these technologies`,
        `But also I'm interested in learning other, new technologies`,
        `I quickly train and strive to develop in the field of web development`,
        `You can go to the skills or portfolio section to rate my knowledge`,
        `All the best for you!`
      ]
    }
  }
}
</script>

<style>
  .contentHome{
    width: 100%;
    height: 100vh;
    padding: 60px 40px;
  }
  .vue-typer {
    font-size: 2rem;
  }
  .typerBlock{
    max-width: 600px;
    z-index: 4;
    position: absolute;
    top: 0;
  }
  .vue-typer .custom.char.typed {
    color: whitesmoke;
    opacity: 0.9;
    text-shadow: 5px 4px 9px rgba(152, 150, 150, 0.6);
  }
  .leftContentHome{
    width: 50%;
    position: relative;
    margin: 120px 0 0 0;
    padding: 80px 0 0 0;
  }
  /**Media**/
  @media screen and (max-width: 700px) {
    .leftContentHome {
      width: 100%;
    }
    .typerBlock {
      margin: 0 auto;
    }
  }
</style>
