<template>
  <div class="contentHome">
    <div class="typerBlock">
      <vue-typer
        caret-animation='smooth'
        :type-delay='70'
        :pre-erase-delay='3000'
        :text=descriptionTyper>
      </vue-typer>
    </div>
    <!--<div>-->
      <!--<text-glitch-->
        <!--text="Vue Text Glitch!"-->
      <!--&gt;</text-glitch>-->
    <!--</div>-->
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import TextGlitch from 'vue-text-glitch'
export default {
  name: 'home',
  components: {
    TextGlitch,
    VueTyper
  },
  data () {
    return {
      descriptionTyper: ['Hello there! My name is Vlad', `I'm a Front-end developer`]
    }
  }
}
</script>

<style>
  .contentHome{
    width: 100%;
    height: 100vh;
    padding: 20px 18px;
  }
  .vue-typer {
    font-size: 4em;
  }
  .typerBlock{
    max-width: 462px;
    margin: 0 auto;
  }
  .vue-typer .custom.char.typed {
    color: #99a1a0;
  }
</style>
