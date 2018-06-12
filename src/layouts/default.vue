<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-drawer
      :side="mobile"
      v-model="showMenuNavigation"
      text-color="white"
      :content-class="$q.theme === 'mat' ? 'bg-primary' : null"
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
          <span>Elsolo's App</span>
          <div slot="subtitle"><span class="grClr">Building for portfolio</span></div>
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="showMenuNavigation = !showMenuNavigation" v-if="isNotMobVersion" aria-label="Toggle menu on right side" />
        <q-fab v-else icon="keyboard_arrow_left" direction="left" color="#10750a">
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
    <q-layout-footer v-model="footer" :reveal="footerReveal">
      <demo-tabs v-if="$q.theme === 'ios'" />
      <q-toolbar :inverted="$q.theme === 'ios'">
        <q-toolbar-title>
          <div class="footer">
            <div class="linkFooter">
              <div class="iconFooter"></div>
              <div class="iconFooter"></div>
              <div class="iconFooter"></div>
            </div>
            <div class="copyright">
              <span>&copy; {{getYear}} by Elsolo</span>
            </div>
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
      showMenuNavigation: true,
      leftDrawerOpen: this.$q.platform.is.desktop,
      isNotMobVersion: false,
      footerReveal: false,
      footer: true,
      mobile: 'left'
    }
  },
  methods: {
    openURL,
    routerLink (link) {
      this.$router.push(`/index/${link}`)
    },
    isMobile () {
      if (this.$q.platform.is.mobile) {
        this.mobile = 'right'
        this.isNotMobVersion = true
      } else {
        this.mobile = 'left'
        this.isNotMobVersion = false
      }
      return this.mobile
    }
  },
  computed: {
    getYear () {
      return new Date().getFullYear()
    }
  },
  created: function () {
    this.isMobile()
    // if (this.$q.platform.is.mobile) {
    //   this.isNotMobVersion = false
    // }
    console.log(this.$q.platform)
  }
}
</script>

<style>
  /**{*/
    /*font-family: Domus;*/
  /*}*/
  .q-toolbar-title{
    padding: 0;
    font-size: 21px;
  }
  .q-toolbar-subtitle{
    font-size: 16px;
  }
  .q-list-header{
    font-size: 24px;
    color: #778077;
    opacity: 0.8;
    padding: 0;
    text-shadow: none;
  }
  .q-item{
    font-size: 18px;
  }
  .q-toolbar{
    padding: 4px 40px;
  }
  /*.q-drawer-container{*/
    /*color: #ffdead;*/
  /*}*/
  .q-item-sublabel{
    color: #778077;
    font-weight: 600;
    text-shadow: none;
  }
  .q-layout-page-container{
    height: 100vh;
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
    background-image: url('../statics/logo.png');
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
    font-weight: 600;
    color: #778077;
    text-shadow: none;
  }
  .logo > div:last-child h5{
    font-weight: 700;
  }
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .copyright > span{
    font-size: 21px;
  }
  .grClr{
    color: #778077;
    font-weight: 600;
    text-shadow: none;
  }
  #textAnim:focus {
    outline: none;
  }
  #textAnim span {
    vertical-align: middle;
    line-height: 1.5em;
    transition: font-size 2s cubic-bezier(0, 1, 0, 1);
    outline-width: 1px;
  }
  #textAnim span:hover {
    font-size: 1.5em;
    line-height: 1em;
    transition: font-size .2s cubic-bezier(0, 0.75, 0, 1);
  }
  .iconFooter{
    width: 32px;
    height: 32px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-right: 8px;
  }
  .iconFooter:hover{
    animation:spin 2s linear infinite;
  }
  @keyframes spin { 100% { transform:rotateY(360deg); } }
  .linkFooter{
    display: flex;
    justify-content: flex-start;
  }
  .linkFooter > div:first-child{
    background-image: url('/statics/vk.svg');
  }
  .linkFooter > div:nth-child(2){
    background-image: url('/statics/facebook.svg');
  }
  .linkFooter > div:last-child{
    background-image: url('/statics/git.svg');
  }
</style>
