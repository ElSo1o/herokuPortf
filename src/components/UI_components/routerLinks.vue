<template>
  <div class="linksBlockHome">
    <div class="linkNavigation" v-for="(item, key, index) in linksArr" :key="index">
      <router-link :to="{path: '/index/' + item.link}">{{item.link}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'router-links',
  data () {
    return {
      linksArr: [
        {
          link: 'skills'
        },
        {
          link: 'portfolio'
        },
        {
          link: 'contacts'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .linksBlockHome{
    padding: 120px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  .linkNavigation{
    height: 150px;
  }
</style>
