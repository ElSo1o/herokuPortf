<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <quick-menu :menu-count=count :icon-class=school :menu-url-list=list :position=position :is-open-new-tab=false></quick-menu>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
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
      count: 1,
      list: [{'isLink': true, url: '/doo'}],
      school: ['fab fa-500px'],
      position: 'top-right',
      isOpenNewTab: false,
      backgroundColorMenu: '#17c4c5'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>
  .q-layout-header >.quick-menu{
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
