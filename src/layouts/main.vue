<template>
  <div v-bind="getNotLogin">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
  methods: {
  },
  computed: {
    getNotLogin () {
      if (this.$store.getters['dataStore/warnLoginNotify'].show) {
        this.$q.notify({
          // only required parameter is the message:
          message: `Can't login. Please check your credentials`,
          /*
           * All parameters below are optional:
           */
          timeout: 103000, // in milliseconds; 0 means no timeout

          // "type" adds a color and icon,
          // so you don't need to specify them.
          // Available values: 'positive', 'negative', 'warning', 'info'
          type: 'negative',

          color: 'positive',
          textColor: 'black', // if default 'white' doesn't fits

          icon: 'clear',
          // or

          detail: 'Optional detail message.',
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
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

</style>
