<template>
  <vue-scroll :ops="ops">
    <loading v-if="loading">
      <template slot="toDo">
        <p>Loading...</p>
      </template>
    </loading>
    <div class="contentContact">
      <div>
        <h3>Send me messages</h3>
      </div>
      <div>
        <div class="formContact">
          <div>
            <q-input :loading="loading" value="" v-model="mail.email" type="text" id="mail" float-label="Enter your email" clearable style="text-align: left; font-size: 18px;" @input="validateForm"/>
          </div>
          <div class="stacked-label" style="text-align: left">
            <q-input :loading="loading" type="textarea" v-model="mail.message" value="" rows="1" float-label="Enter message" clearable @input="validateForm"></q-input>
          </div>
          <div class="sendMailBtn">
            <q-btn outline :disabled="disable" v-on:click="sendMail" style="color: #d9d9d9" label="Send" />
          </div>
        </div>
      </div>
    </div>
  </vue-scroll>
</template>

<script>
import gql from 'graphql-tag'
const sendMail = gql`
    mutation sendMail($mail: String!, $message: String!) {
      sendToMail (mail:$mail, message: $message) {
        send
      }
    }
`
import loading from 'src/components/UI_components/Loading'
export default {
  name: 'contacts',
  components: {
    loading
  },
  data () {
    return {
      ops: {
        vuescroll: {
          mode: 'native'
        },
        scrollPanel: {
          scrollingX: false
        },
        scrollContent: {

        },
        vRail: {
          pos: 'right',
          opacity: 0.5,
          background: '#01a99a'
        }
      },
      loading: false,
      mail: {
        email: '',
        message: ''
      },
      disable: true
    }
  },
  methods: {
    validateForm (e) {
      const validateEmail = this.validateEmail
      if (!validateEmail || this.mail.message === '') {
        this.disable = true
      } else {
        this.disable = false
      }
      return this.disable
    },
    sendMail () {
      if (!this.validateForm()) {
        this.loading = true
        const mail = this.mail.email
        const message = this.mail.message
        console.log(mail)
        console.log(message)
        this.$apollo.mutate({
          mutation: sendMail,
          variables: {
            mail: mail,
            message: message
          }
        }).then((response) => {
          // console.log(response.data.sendToMail.send)
          this.loading = false
          if (response.data.sendToMail.send) {
            this.$q.notify({
              message: `Thank you your message sent`,
              timeout: 3000, // in milliseconds; 0 means no timeout
              type: 'info',
              color: 'info',
              textColor: 'black',
              icon: 'done',
              detail: 'Success!',
              position: 'bottom',
              actions: [
                {
                  label: 'Close',
                  icon: 'clear',
                  noDismiss: false,
                  handler: () => {
                  }
                }
              ],
              onDismiss () { // v0.15.11+
              }
            })
            this.mail.email = ''
            this.mail.message = ''
          }
        }).catch((error) => {
          this.loading = false
          console.log(error.message)
          localStorage.removeItem('token')
          setTimeout(() => { this.$router.push({name: 'login'}) }, 0)
        })
      } else {
        return false
      }
    }
  },
  computed: {
    validateEmail () {
      let regEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
      return regEmail.test(String(this.mail.email).toLowerCase())
    }
  }
}
</script>

<style scoped>
  .contentContact{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: -webkit-fill-available;
  }
  .contentContact > div:first-child{
    width: 100%;
    padding-bottom: 20px;
  }
  .contentContact > div:last-child{
    width: 75%;
    margin: 0 auto;
    padding: 20px 24px;
  }
 h3{
   text-transform: uppercase;
   font-size: 24px;
   font-weight: 200;
 }
  .formContact{
    max-width: 35%;
    margin: 0 auto;
  }
  .sendMailBtn{
    padding-top: 20px;
  }
  @media screen and (max-width: 1625px) {
    .formContact {
      max-width: 50%
    }
  }
  @media screen and (max-width: 1300px) {
    .formContact {
      max-width: 60%
    }
  }
  @media screen and (max-width: 720px) {
    .contentContact > div:last-child{
      width: 100%;
    }
    .formContact {
      max-width: 80%
    }
  }
  @media screen and (max-width: 400px) {
    .formContact {
      max-width: 100%
    }
  }
</style>
