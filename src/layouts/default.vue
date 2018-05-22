<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-drawer
      side="right"
      v-model="right"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
      v-if="isNotMobVersion"
    >
        <q-list-header>Menu</q-list-header>
      <q-item to="/index/home">
        <q-item-side icon="account circle" />
        <q-item-main label="Home" sublabel="About me" />
      </q-item>
        <q-item to="/index/skills">
          <q-item-side icon="code" />
          <q-item-main label="Skills" sublabel="What i use" />
        </q-item>
        <q-item to="/index/portfolio">
          <q-item-side icon="view_array" />
          <q-item-main label="Portfolio" sublabel="Examples of my work" />
        </q-item>
        <q-item to="/index/contacts">
          <q-item-side icon="pin_drop" />
          <q-item-main label="Contacts" sublabel="Contact me" />
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
        <q-btn flat round dense icon="menu" @click="right = !right" v-if="isNotMobVersion" aria-label="Toggle menu on right side" />
        <q-fab v-else icon="keyboard_arrow_left" direction="left" color="green-4">
          <q-fab-action
            color="cyan-7"
            icon="adb"
            @click="routerLink('skills')"
          />
          <q-fab-action
            color="cyan-7"
            icon="developer_mode"
            @click="routerLink('portfolio')"
          />
          <q-fab-action
            color="cyan-7"
            icon="contact_mail"
            @click="routerLink('contacts')"
          />
          <q-fab-action
            color="cyan-7"
            icon="alarm"
            @click="routerLink('home')"
          />
        </q-fab>
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
      isNotMobVersion: true
    }
  },
  methods: {
    openURL,
    routerLink (link) {
      this.$router.push(`/index/${link}`)
    }
  },
  created: function () {
    if (this.$q.platform.is.mobile) {
      this.isNotMobVersion = false
    }
    console.log(this.$q)
  }
}
</script>

<style scoped>
  .q-toolbar-title{
    padding: 0;
  }
  .q-toolbar{
    padding: 4px 18px;
  }
</style>
