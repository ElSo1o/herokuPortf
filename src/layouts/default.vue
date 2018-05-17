<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-drawer
      side="right"
      v-model="right"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
    >
        <q-list-header>Menu</q-list-header>
      <q-item to="/home">
        <q-item-side icon="account circle" />
        <q-item-main label="Home" sublabel="About me" />
      </q-item>
        <q-item to="/skills">
          <q-item-side icon="code" />
          <q-item-main label="Skills" sublabel="What i use" />
        </q-item>
        <q-item to="/portfolio">
          <q-item-side icon="view_array" />
          <q-item-main label="Portfolio" sublabel="Examples of my work" />
        </q-item>
        <q-item to="/contacts">
          <q-item-side icon="pin_drop" />
          <q-item-main label="Contacts" sublabel="...on a Layout" />
        </q-item>
        <div v-if="scrolling" style="padding: 25px 16px 16px;">
          <p class="caption" v-for="n in 50" :key="`left-${n}`">
          </p>
        </div>
    </q-layout-drawer>
    <q-layout-header>
      <q-toolbar
        side="right"
        color="grey-12"
        :glossy="false"
        :inverted="$q.theme === 'ios'"
        text-color="dark"
      >
        <q-toolbar-title>
          Elsolo's App
          <div slot="subtitle">Building for portfolio</div>
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="right = !right" aria-label="Toggle menu on right side" />
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'LayoutDefault',
  components: {
  },
  data () {
    return {
      scrolling: true,
      right: false,
      leftDrawerOpen: this.$q.platform.is.desktop,
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
</style>
