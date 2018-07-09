<template>
  <div class="mainSect" @keyup.enter="submitLogin">
    <div class="section">
      <div>
        <!--<div>-->
          <!--<h3>Log In</h3>-->
        <!--</div>-->
        <div class="inputLog">
          <div class="form-group">
            <q-input :loading="loading" v-model="formVal.login" type="text" id="login" float-label="Login" no-pass-toggle clearable style="text-align: left; font-size: 18px;" @input="validateLogin"/>
          </div>
          <div class="form-group">
            <q-input  :loading="loading" v-model="formVal.password" type="password" id="password" float-label="Password" clearable style="text-align: left; font-size: 18px;" @input="validateLogin"/>
          </div>
        </div>
        <div class="btnLink">
          <q-btn outline :disabled="disable" v-on:click="submitLogin" style="color: #d9d9d9" label="Sing In" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
const singIn = gql`
        mutation auth($login: String!, $password: String!) {
          singIn(login: $login, password: $password) {
            token
            user{
              _id
              login
              info{
                type
                name
              }
              email
          }
        }
      }
      `
export default {
  name: 'login',
  data () {
    return {
      formVal: {
        login: '',
        password: ''
      },
      boolLogin: false,
      disable: true,
      token: null,
      loading: false
    }
  },
  computed: {
  },
  methods: {
    validateLogin (e) {
      if (this.formVal.login === '' || this.formVal.password === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    valInput (e) {
      console.log(e.target)
      // if (e.target.id === 'login') {
      //   this.boolBtn = false
      //   if (e.target.value === '') {
      //     this.boolBtn = true
      //     this.boolLogin = false
      //   }
      //   this.formVal.login = e.target.value
      // } else {
      //   this.formVal.password = e.target.value
      // }
    },
    submitLogin () {
      this.loading = true
      const _this = this
      this.$apollo.mutate({
        mutation: singIn,
        variables: {
          login: _this.formVal.login,
          password: _this.formVal.password
        }
      }).then((response) => {
        console.log(response)
        if (response.data.singIn.token) {
          sessionStorage.setItem('token', response.data.singIn.token)
          this.$store.commit('dataStore/toggleSuccessNotifyLogin', {show: true, message: `You are logging ia a ${response.data.singIn.user.login}, your type permission ${response.data.singIn.user.info.type}`})
          this.loading = false
          this.$router.push({ path: '/index' })
        }
      }).catch((error) => {
        // console.error(error)
        // let lastIndex = error.message.lastIndexOf(':')
        // const message = error.message.substring(0, lastIndex)
        // console.log(error.message)
        if (error.networkError.statusCode === 401) {
          this.$store.commit('dataStore/toggleWargLoginNotifity', {show: true, message: `Can't login. Please check your credentials`})
        }
        if (error.networkError.statusCode === 500) {
          this.$store.commit('dataStore/toggleWargLoginNotifity', {show: true, message: `Bad request!`})
        }
        this.loading = false
      })
    }
  },
  mounted: function () {
  }
}

</script>

<style scoped>
  .mainSect{
    height: 100vh;
    display: flex;
    align-items: center;
  }
  .section{
    vertical-align: middle;
    text-align: center;
    /*width: 1024px;*/
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 41%, rgba(238,236,238,1) 77%, rgba(237,234,237,1) 83%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#edeaed', GradientType=1 );
    border: 1px solid #908d8d36;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  .inputLog{
    margin: 0 auto;
    width: auto;
  }
  .section > div{
  }
  .btnLink{
    position: relative;
    padding-top: 25px;
  }
  h3{
    font-weight: 600;
  }
  .section > div:first-child{
    width: 370px;
    background: #cbeaea14;
    padding: 15px 18px;
    margin: 0 auto;
    border: 1px solid #d9dad9;
    border-radius: 4px;
  }
  @media screen and (max-width: 450px) {
    .section > div:first-child {
      width: 100%
    }
  }
  /*i{*/
    /*color: #979797!important;*/
  /*}*/
</style>
