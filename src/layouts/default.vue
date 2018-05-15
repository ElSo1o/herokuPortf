<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <quick-menu :menu-count=count @click="testFn" :background-color=backgroundColorMenu :color=color :icon-class=iconArr :menu-url-list=list :position=position :is-open-new-tab=false></quick-menu>
      <q-toolbar
        color="grey-12"
        :glossy="false"
        :inverted="$q.theme === 'ios'"
        text-color="dark"
      >
        <q-toolbar-title>
          Elsolo's App
          <div slot="subtitle">Building for portfolio</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import quickMenu from 'vue-quick-menu'
export default {
  name: 'LayoutDefault',
  components: {
    quickMenu
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      count: 4,
      list: [{'isLink': true, url: '/doo'}, {'isLink': true, url: '/doo'}, {'isLink': true, url: '/doo'}, {'isLink': true, url: '/'}],
      iconArr: ['fab fa-studiovinari', 'fab fa-connectdevelop', 'far fa-envelope-open', 'fas fa-terminal'],
      position: 'top-right',
      isOpenNewTab: false,
      backgroundColorMenu: 'rgba(129, 191, 100, 0.9)',
      color: '#fff'
    }
  },
  methods: {
    openURL,
    testFn () {
      alert('')
    }
  },
  created: function () {
    // let elem = document.getElementsByClassName('quick-menu')[0]
    // console.log(elem)
    // elem.addEventListener('click', function () {
    //   alert('')
    // })
  }
}
</script>

<style scoped>
  .q-layout-header > .quick-menu{
    z-index: 9;
    top: 10px!important;
  }
  .q-toolbar{
    z-index: 8;
    padding: 4px 30px;
    min-height: 80px;
  }
  .q-toolbar > .q-toolbar-title{
    padding: 0;
  }
</style>
