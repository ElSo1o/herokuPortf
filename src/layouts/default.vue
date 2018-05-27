<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-drawer
      side="right"
      v-model="right"
      text-color="white"
      :content-class="$q.theme === 'mat' ? 'bg-blue-grey-7' : null"
      v-if="isNotMobVersion"
      inverted
    >
        <q-list-header>
          <div class="logo">
            <div></div>
            <div>
              <h5>Vlad Legusha</h5>
              <span>Front-end developer</span>
            </div>
          </div>
        </q-list-header>
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
        color="primary"
        :glossy="false"
        :inverted="$q.theme === 'ios'"
        text-color="white"
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

    <q-page-container style="padding: 0;">
      <router-view />
    </q-page-container>
    <q-layout-footer v-model="footer" :reveal="footerReveal">
      <demo-tabs v-if="$q.theme === 'ios'" />
      <q-toolbar :inverted="$q.theme === 'ios'">
        <q-toolbar-title>
          <div class="footer">
            <p>Footer</p>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
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
      isNotMobVersion: true,
      footerReveal: false,
      footer: true
    }
  },
  methods: {
    openURL,
    routerLink (link) {
      this.$router.push(`/index/${link}`)
    }
  },
  created: function () {
    // if (this.$q.platform.is.mobile) {
    //   this.isNotMobVersion = false
    // }
    // console.log(this.$q)
  }
}
</script>

<style>
  /**{*/
    /*font-family: Domus;*/
  /*}*/
  .q-toolbar-title{
    padding: 0;
    font-size: 27px;
  }
  .q-toolbar-subtitle{
    font-size: 18px;
  }
  .q-list-header{
    font-size: 24px;
    color: whitesmoke;
    opacity: 0.8;
    padding: 0;
  }
  .q-item{
    font-size: 18px;
  }
  .q-toolbar{
    padding: 4px 40px;
  }
  .bg-blue-grey-9, .bg-blue-grey-7{
    background-color: #37474fbf !important;
  }
  /*.q-drawer-container{*/
    /*color: #ffdead;*/
  /*}*/
  .q-item-sublabel{
    color: whitesmoke;
    opacity: 0.8;
  }
  .logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: normal;
    padding: 28px 0;
  }
  .logo > div:first-child{
    width: 128px;
    height: 128px;
    background-image: url('/statics/logo.png');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-position-x: -20px;
  }
  .logo > div:last-child{
    text-align: center;
    padding-top: 14px;
  }
  .logo > div:last-child span{
    font-size: 20px;
    font-weight: 700;
    color: whitesmoke;
  }
  .footer{
  }
</style>
