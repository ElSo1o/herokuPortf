<template>
  <div class="mainSect" @keyup.enter="submitLogin">
    <div class="section">
      <div>
        <div>
          <h3>Log In</h3>
        </div>
        <div class="inputLog">
          <div class="form-group">
            <q-input :loading="loading" v-model="formVal.login" type="text" id="login" float-label="Login" no-pass-toggle clearable style="text-align: left" @input="validateLogin"/>
          </div>
          <div class="form-group">
            <q-input  :loading="loading" v-model="formVal.password" type="password" id="password" float-label="Password" clearable style="text-align: left" @input="validateLogin"/>
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
      this.$store.commit('dataStore/toggleWargLoginNotifity', true)
      const _this = this
      this.$apollo.mutate({
        mutation: singIn,
        variables: {
          login: _this.formVal.login,
          password: _this.formVal.password
        }
      }).then((response) => {
        console.log(response)
        // if (response.data.Login.token === null || response.data.Login.token === 'undefined') {
        //   this.boolLogin = true
        //   return false
        // } else {
        //   this.$ls.set('token', response.data.Login.token)
        //   this.boolLogin = false
        //   this.$router.push({path: '/admin'})
        // }
      }).catch((error) => {
        console.error(error)
      })
    }
  },
  mounted: function () {
    // console.log(this.$store.info)
    // this.$q.notify({
    //   // only required parameter is the message:
    //   message: `Can't login. Please check your credentials`,
    //   /*
    //    * All parameters below are optional:
    //    */
    //   timeout: 103000, // in milliseconds; 0 means no timeout
    //
    //   // "type" adds a color and icon,
    //   // so you don't need to specify them.
    //   // Available values: 'positive', 'negative', 'warning', 'info'
    //   type: 'negative',
    //
    //   color: 'positive',
    //   textColor: 'black', // if default 'white' doesn't fits
    //
    //   icon: 'clear',
    //   // or
    //
    //   detail: 'Optional detail message.',
    //   position: 'top-right', // 'top', 'left', 'bottom-left' etc
    //
    //   actions: [
    //     {
    //       label: 'Close',
    //       icon: 'clear', // optional
    //       noDismiss: false, // optional, v0.15.11+
    //       handler: () => {
    //         console.log('acting')
    //       }
    //     }
    //   ],
    //   onDismiss () { // v0.15.11+
    //   }
    // })
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
    width: 258px;
  }
  .section > div{
  }
  .btnLink{
    position: relative;
    padding-top: 20px;
  }
  h3{
    font-weight: 600;
  }
  /*i{*/
    /*color: #979797!important;*/
  /*}*/
</style>
