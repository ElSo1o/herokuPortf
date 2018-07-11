<template>
  <vue-scroll :ops="ops">
  <div class="contentSkills">
    <div>
      <h4>This page displays all the technologies that I previously used and in my humble opinion I have made a calculation of the level of their knowledge and experience in these technologies,max total 100</h4>
    </div>
    <div class="sectionContent sectionBlock shadow-4">
        <div>
          <h5>Front-end</h5>
          <div class="hr"></div>
        </div>
        <div class="frontSkills">
          <div v-for="(item, i, key) in dataSkillsFront" :key="key" class="technologies">
            <radial-progress-bar :diameter="160"
                                 :completed-steps="item.completedSteps"
                                 :total-steps="item.totalSteps"
                                 :timingFunc="item.animate"
                                 :animateSpeed="3000"
                                 :strokeWidth="5"
                                 :startColor="item.colorStart"
                                 :stopColor="item.colorStop"
                                 :innerStrokeColor="item.strokeColor"
            >
              <p>{{item.title}}</p>
              <p>Total: <span>{{item.completedSteps}}</span></p>
            </radial-progress-bar>
          </div>
        </div>
        <div class="backSkills">

        </div>
      </div>
  </div>
  </vue-scroll>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
  name: 'skills',
  components: {
    RadialProgressBar
  },
  data () {
    return {
      completedSteps: 0,
      totalSteps: 100,
      animate: 'cubic-bezier(.29, 1.01, 1, -0.68)',
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
      dataTotal: [90, 80, 100, 30, 30, 70, 80, 80, 85, 60],
      randomAnimate: [
        'cubic-bezier(.03,1.57,1,.07)',
        'linear',
        'cubic-bezier(.03,1.57,1,-0.87)',
        'cubic-bezier(1,-1.49,.88,-1.48)',
        'cubic-bezier(.23,1.49,0,-1.27)'
      ],
      dataSkillsFront: [
        {
          title: 'HTML',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#ff423a',
          colorStop: '#a84121',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'CSS',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#25beff',
          colorStop: '#277490',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'BootStrap',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#a15ea9',
          colorStop: '#b668ff',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'Stylus',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#b3d107',
          colorStop: '#829b07',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'Sass',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#c7568e',
          colorStop: '#755dab',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'JavaScript',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#abad42',
          colorStop: '#f9dc3d',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'jQuery',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#076aae',
          colorStop: '#0a94f9',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'Vue',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#3d8185',
          colorStop: '#42b884',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'Quasar Framework',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#1976d5',
          colorStop: '#42a5f8',
          strokeColor: '#b0b6b0'
        },
        {
          title: 'Cordova',
          completedSteps: 0,
          totalSteps: 100,
          animate: '',
          colorStart: '#3c4854',
          colorStop: '#b5e6dd',
          strokeColor: '#b0b6b0'
        }
      ]
    }
  },
  mounted: function () {
    this.dataSkillsFront.forEach((item, i) => {
      item.animate = this.randomAnimate[Math.floor(Math.random() * this.randomAnimate.length)]
      item.completedSteps = this.dataTotal[i]
    })
    console.log()
  }
}
</script>

<style scoped>
  .contentSkills{
    height: 100%;
  }
  .frontSkills, .backSkills{
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .contentSkills > div:first-child{
    padding-bottom: 20px;
  }
  .sectionContent{
    padding: 20px 24px;
  }
  .sectionContent > div:first-child{
    text-align: left;
  }
  .sectionContent > div:first-child h5{
    font-size: 22px;
    font-weight: 600;
  }
  .contentSkills > div:first-child  h4{
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 200;
  }
  .technologies{
    /*flex-basis: 50%;*/
    padding-right: 10px;
  }
  .radial-progress-inner > p:first-child {
    text-transform: uppercase;
  }
  .radial-progress-inner > p:last-child {
    color: #636963;
    font-weight: 300;
  }
</style>
