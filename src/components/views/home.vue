<template>
  <div class="contentHome">
    <div class="leftContentHome">
      <div class="typerBlock">
      </div>
      <router-links></router-links>
    </div>
    <bg-glitch></bg-glitch>
  </div>
</template>

<script>
import TextGlitch from 'vue-text-glitch'
import bgGlitch from 'src/components/UI_components/bgGlitch'
import routerLinks from 'src/components/UI_components/routerLinks'
export default {
  name: 'home',
  components: {
    TextGlitch,
    bgGlitch,
    routerLinks
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  #textAnim:focus {
    outline: none;
  }
  #textAnim span {
    vertical-align: middle;
    line-height: 1.5em;
    transition: font-size 2s cubic-bezier(0, 1, 0, 1);
  }
  #textAnim span:hover {
    font-size: 1.5em;
    line-height: 1em;
    transition: font-size .2s cubic-bezier(0, 0.75, 0, 1);
  }
  .contentHome{
    width: 100%;
    height: 100%;
    padding: 60px 40px;
  }
  .vue-typer {
    font-size: 2rem;
  }
  .typerBlock{
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
    position: relative;
    /*margin: 120px auto;*/
    /*padding: 120px 0 0 0;*/
  }
  /**Media**/
  @media screen and (max-width: 1500px) {
    .leftContentHome {
      margin: 0 auto;
      margin-top: 60px;
    }
  }
  @media screen and (max-width: 700px) {
    .leftContentHome {
      width: 100%;
      margin: 20px 0 0 0;
    }
    .typerBlock {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 450px) {
    .contentHome{
      height: 100%;
    }
    .leftContentHome{
      padding: 380px 0 0 0;
    }
  }
</style>
