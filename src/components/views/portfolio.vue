<template>
  <vue-scroll :ops="ops">
    <loading v-if="loading">
      <template slot="toDo">
        <p>Loading...</p>
      </template>
    </loading>
    <div class="contentPortfolio">
        <div>
          <div>
            <h3>Header</h3>
          </div>
          <div>
            <div class="card" v-for="(item, i, key) in getProjects" :key="key">
              <div class="img">
                <img :src="item.img">
              </div>
              <div class="hr"></div>
              <div class="rating">
                <h5>{{item.name}}</h5>
                <q-rating slot="subtitle" v-model="item.rating.data" :max="5" />
              </div>
              <div class="description">
                <q-collapsible icon="info" label="About project" icon-toggle>
                  <div class="descriptionToggle">{{item.description}}</div>
                </q-collapsible>
              </div>
            </div>
          </div>
        </div>
    </div>
  </vue-scroll>
</template>

<script>
import gql from 'graphql-tag'
const loadPortfolio = gql`
      query projects{
      projects{
        name
        img
        src
        description
        rating{
          data
          arrAll{
            id
          }
          counter
        }
      }
    }
`
import loading from 'src/components/UI_components/Loading'
export default {
  name: 'portfolio',
  components: {
    loading
  },
  data () {
    return {
      stars: 2,
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
      dataProjects: []
    }
  },
  methods: {
    toggleLoading () {
      this.loading = !this.loading
      return this.loading
    }
  },
  computed: {
    getProjects () {
      return this.dataProjects
    }
  },
  mounted: function () {
    this.toggleLoading()
    this.$apollo.query({
      query: loadPortfolio
    }).then((response) => {
      response = JSON.parse(JSON.stringify(response))
      console.log(response.data.projects)
      this.dataProjects = response.data.projects
      this.toggleLoading()
    }).catch((error) => {
      if (error.networkError.statusCode === 401) {
      }
      if (error.networkError.statusCode === 500) {
      }
    })
  }
}
</script>

<style scoped>
  .card{
    box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    max-width: 300px;
    background: rgba(223,226,226,0.239);
    display: flex;
    flex-direction: column;
  }
  .img{

  }
  .rating{
    text-align: left;
    padding: 8px 16px;
    font-size: 21px;
  }
  .descriptionToggle{
    text-align: left;
  }
</style>
