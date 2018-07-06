<template>
  <div class="mainSect" @keyup.enter="submitLogin">
    <div class="section">
      <div>
        <div>
          <h1>Log In</h1>
        </div>
        <div class="inputLog" v-for="(item, index) in formVal" v-bind:key="index">
          <div class="form-group">
            <label :for="index">{{index}}</label>
            <input :type="index" class="form-control" :id="index" :placeholder="index" v-on:input="valInput">
          </div>
        </div>
        <div class="btnLink">
        <button class="btn btn-success" :disabled="boolBtn" v-on:click="submitLogin"  >Login</button>
          <b-alert :show="boolLogin" variant="danger">Can't login. Please check your credentials</b-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
// const loginMutate = gql`
//         mutation auth($email: String, $password: String) {
//           Login(email: $email, password: $password) {
//             token
//           }
//         }
//       `
export default {
  name: 'login',
  data () {
    return {
      formVal: {
        email: '',
        password: ''
      },
      boolLogin: false,
      boolBtn: true,
      token: null
    }
  },
  methods: {
    valInput (e) {
      if (e.target.id === 'email') {
        this.boolBtn = false
        if (e.target.value === '') {
          this.boolBtn = true
          this.boolLogin = false
        }
        this.formVal.email = e.target.value
      } else {
        this.formVal.password = e.target.value
      }
    },
    submitLogin () {
      const _this = this
    //   this.$apollo.mutate({
    //     mutation: loginMutate,
    //     variables: {
    //       email: _this.formVal.email,
    //       password: _this.formVal.password
    //     }
    //   }).then((response) => {
    //     console.log(response)
    //     if (response.data.Login.token === null || response.data.Login.token === 'undefined') {
    //       this.boolLogin = true
    //       return false
    //     } else {
    //       this.$ls.set('token', response.data.Login.token)
    //       this.boolLogin = false
    //       this.$router.push({path: '/admin'})
    //     }
    //   }).catch((error) => {
    //     console.error(error)
    //   })
    // }
  },
  mounted: function () {
    // console.log(this.$store.info)
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
    background: #dcdcdcb0;
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
  }
  /*.btnLink > h4{*/
  /*position: absolute;*/
  /*top: 100%;*/
  /*left: 0;*/
  /*right: 0;*/
  /*margin: 15px 0 15px;*/
  /*}*/
  .btnLink > .alert{
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
    position: absolute;
    top: 130%;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 0.25rem;
    width: 258px;
  }
  /*.btnLink > .btn-success{*/
  /*margin-bottom: 1rem;*/
  /*}*/
  .btnLink > .btn-success:disabled{
    color: #212529;
  }
</style>
