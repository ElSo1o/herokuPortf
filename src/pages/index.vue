<template>
    <!--<transition-->
      <!--name="custom-classes-transition"-->
      <!--enter-active-class="animated zoomOutUp"-->
      <!--leave-active-class="animated zoomOutDown"-->
    <!--&gt;-->
    <!--<router-view></router-view>-->
    <!--</transition>-->
  <div class="content">
    <router-view></router-view>
    <bg-glitch></bg-glitch>
  </div>
</template>

<style>
</style>

<script>
import bgGlitch from 'src/components/UI_components/bgGlitch'
import home from 'src/components/views/home'
import skills from 'src/components/views/skills'
import portfolio from 'src/components/views/portfolio'
import contacts from 'src/components/views/contacts'
export default {
  name: 'PageIndex',
  components: {
    bgGlitch,
    home,
    skills,
    portfolio,
    contacts
  }
}
</script>
