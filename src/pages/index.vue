<template>
  <q-page class="flex flex-center">
    <h1></h1>
    <router-view></router-view>
  </q-page>
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
