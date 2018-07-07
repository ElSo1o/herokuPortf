<template>
  <div v-bind="getNotLogin">
    <div v-bind="getLogin">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-section',
  methods: {
  },
  computed: {
    getNotLogin () {
      if (this.$store.getters['dataStore/warnLoginNotify'].show) {
        this.$q.notify({
          // only required parameter is the message:
          message: `${this.$store.getters['dataStore/warnLoginNotify'].message}`,
          timeout: 10000, // in milliseconds; 0 means no timeout
          // Available values: 'positive', 'negative', 'warning', 'info'
          type: 'negative',
          color: 'positive',
          textColor: 'black', // if default 'white' doesn't fits

          icon: 'clear',
          // or

          detail: 'Error!',
          position: 'top-right', // 'top', 'left', 'bottom-left' etc

          actions: [
            {
              label: 'Close',
              icon: 'clear', // optional
              noDismiss: false, // optional, v0.15.11+
              handler: () => {
                console.log('acting')
              }
            }
          ],
          onDismiss () { // v0.15.11+
          }
        })
        this.$store.commit('dataStore/toggleWargLoginNotifity', false)
      }
      return this.$store.getters['warnLoginNotify']
    },
    getLogin () {
      if (this.$store.getters['dataStore/successLoginNotify'].show) {
        this.$q.notify({
          // only required parameter is the message:
          message: `${this.$store.getters['dataStore/successLoginNotify'].message}`,
          /*
           * All parameters below are optional:
           */
          timeout: 99999999, // in milliseconds; 0 means no timeout

          // "type" adds a color and icon,
          // so you don't need to specify them.
          // Available values: 'positive', 'negative', 'warning', 'info'
          type: 'positive',

          color: 'positive',
          textColor: 'black', // if default 'white' doesn't fits

          icon: 'done',
          // or

          detail: 'Success!',
          position: 'top-right', // 'top', 'left', 'bottom-left' etc

          actions: [
            {
              label: 'Close',
              icon: 'clear', // optional
              noDismiss: false, // optional, v0.15.11+
              handler: () => {
                console.log('acting')
              }
            }
          ],
          onDismiss () { // v0.15.11+
          }
        })
        this.$store.commit('dataStore/toggleSuccessNotifyLogin', false)
      }
      return this.$store.getters['warnLoginNotify']
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

</style>
