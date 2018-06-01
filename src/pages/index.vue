<template>
    <!--<transition-->
      <!--name="custom-classes-transition"-->
      <!--enter-active-class="animated zoomOutUp"-->
      <!--leave-active-class="animated zoomOutDown"-->
    <!--&gt;-->
    <!--<router-view></router-view>-->
    <!--</transition>-->
    <router-view></router-view>
</template>

<style>
</style>

<script>
import home from 'src/components/views/home'
import skills from 'src/components/views/skills'
import portfolio from 'src/components/views/portfolio'
import contacts from 'src/components/views/contacts'
export default {
  name: 'PageIndex',
  components: {
    home,
    skills,
    portfolio,
    contacts
  }
}
</script>
