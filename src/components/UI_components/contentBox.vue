<template>
  <div class="linksBlockHome">
    <div class="linkNavigation" v-for="(item, key, index) in linksArr" :key="index">
      <div class="contentLink">
        <router-link :to="{path: '/index/' + item.link}">{{item.link}}</router-link>
      </div>
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
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .linkNavigation{
    flex-basis: 33%;
    text-align: center;
    height: 200px;
    box-shadow: 0 -2px 4px -1px rgba(0,0,0,0.2), 0 -4px 5px rgba(0,0,0,0.14), 0 -1px 10px rgba(0,0,0,0.12);
    padding: 24px;
    border-radius: 4px;
    transition: 0.5s;
    background: #b4d0e087
  }
  .linkNavigation:hover{
    padding: 12px;
  }
  .contentLink{
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: #e1e7f1;
    border: 1px solid #a5a4a454;
  }
  .linkNavigation a{
    font-size: 3rem;
    text-decoration: none;
  }
</style>
