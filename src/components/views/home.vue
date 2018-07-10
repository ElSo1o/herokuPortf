<template>
  <div class="contentHome">
    <vue-scroll :ops="ops">
      <div class="leftContentHome">
        <div class="typerBlock"></div>
        <div class="contentBlock">
          <div class="sectionBlock">
            <div>
              <div class="headerVisit">
                <h5>Vladislav Vitalievich Legusha</h5>
              </div>
              <div class="hr"></div>
              <div style="margin-top: 15px">
                <div class="aboutSite">
                  <div>
                    <h6>About site</h6>
                  </div>
                  <div class="contentAbout">
                    <div>
                      <h6>Why did I create this site?</h6>
                    </div>
                    <div>
                      <blockquote >
                        <p>I thought it would be a good idea to collect all of my portfolio and summery in one place and show you some of my skills</p>
                        <!--<small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>-->
                      </blockquote>
                    </div>
                  </div>
                  <div class="contentAbout">
                    <div>
                      <h6>What technologies are used on this site?</h6>
                    </div>
                    <div>
                      <blockquote >
                        <p>I'm using technologies such as Webpack,Vue,Quasar Framework,Apollo-Client,GraphQl-Client,and I created the Backend API for the authentication I'm using Node.js,Express,GraphQL-Server,Apollo-Server,MongoDB and JWT</p>
                        <!--<small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>-->
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div class="about">
                  <div><h6>About me</h6></div>
                  <div class="contentAbout" v-for="(item, i, key) in dataAbout" :key="key">
                    <div>
                      <h6>{{item.title}} :</h6>
                    </div>
                    <blockquote >
                      <p>{{item.descript}}</p>
                      <p v-if="i === 0">You can see the details on the page <router-link :to="{ name: 'skills' }">skills</router-link></p>
                    </blockquote>
                  </div>
                </div>
                <div class="tableData">
                  <div class="tableInfo">
                    <h6>Personal Info</h6>
                    <table class="table table-striped table-bordered">
                      <tbody>
                        <tr>
                          <td>DOB</td>
                          <td>17.10.1991</td>
                        </tr>
                        <tr>
                          <td>Place</td>
                          <td>Ukraine Doneckaya obl. city Bahmut | Artemovsk</td>
                        </tr>
                        <tr>
                          <td>Marital status</td>
                          <td>not married</td>
                        </tr>
                        <tr>
                          <td>General experience</td>
                          <td>2 years</td>
                        </tr>
                        <tr>
                          <td>Education</td>
                          <td>Higher education in economics</td>
                        </tr>
                        <tr>
                          <td>Knowledge of English</td>
                          <td>At the level of reading and understanding technical documentation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tableContact">
                    <h6>Contacts</h6>
                    <table class="table table-striped table-bordered">
                      <tbody>
                      <tr>
                        <td>Tel</td>
                        <td><a href="tel:+38(099) 777-16-35">+38(099) 777-16-35</a></td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td><a href="mailto:vlad.legusha@gmail.com">vlad.legusha@gmail.com</a></td>
                      </tr>
                      <tr>
                        <td>Skype</td>
                        <td><a href="skype:Vladvay1?userinfo">Vladvay1</a></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--<content-box></content-box>-->
      </div>
    </vue-scroll>
  </div>
</template>

<script>
import TextGlitch from 'vue-text-glitch'
import bgGlitch from 'src/components/UI_components/bgGlitch'
export default {
  name: 'home',
  components: {
    TextGlitch,
    bgGlitch
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
      dataAbout: [
        {
          title: 'My experience',
          descript: 'I worked remotely for one and half year in the Belgian campaign CallSof and held a position as a front-end developer,all technical documentation was in English, so I chose English for my resume,during my work I learned the leading technologies in web development,such as WebPack, Vue.js, Apollo, GraphQL, Node.js, Express.js, Cordova.js, Quasar Framework, and I also have experience in developing the back-end part but only on Node.js and Express.js,I think that from the front-end side I take the middle position and with the back-end junior position.'
        },
        {
          title: 'Personal qualities',
          descript: 'There is a desire to develop professionally, to strive for career growth,I want to learn new technologies, and be able to apply them in practice,I have such qualities: ability to use the search engine Google, punctuality, analytic skills, attentiveness, high efficiency, fast learner.'
        },
        {
          title: 'Expectation from work',
          descript: 'The possibility of professional growth,friendly team,acceptable working conditions.'
        }
      ],
      dataAboutSite: [
        {
          title: 'Title'
        }
      ]
    }
  }
}
</script>

<style>
  #textAnim:focus {
    outline: none;
  }
  #textAnim span {
    vertical-align: middle;
    line-height: 1.5em;
    transition: font-size 2s cubic-bezier(0, 1, 0, 1);
  }
  #textAnim span:hover {
    font-size: 1.5em;
    line-height: 1em;
    transition: font-size .2s cubic-bezier(0, 0.75, 0, 1);
  }
  .contentHome{
    width: 100%;
    height: 100%;
  }
  .vue-typer {
    font-size: 2rem;
  }
  .typerBlock{
    z-index: 4;
    position: absolute;
    top: 0;
  }
  .vue-typer .custom.char.typed {
    color: whitesmoke;
    opacity: 0.9;
    text-shadow: 5px 4px 9px rgba(152, 150, 150, 0.6);
  }
  .leftContentHome{
    position: static;
    /*overflow: auto;*/
    height: 100%;
    /*margin: 120px auto;*/
    /*padding: 120px 0 0 0;*/
  }
  .contentBlock{
    padding: 20px 40px;
  }
  .contentBlock > div{
    max-width: 75%;
    margin: 0 auto;
    padding: 20px 24px;
  }
  .sectionBlock{
    border: 1px solid #d9dad9;
    background: #dfe2e23d;
    border-radius: 4px;
    /*-webkit-box-shadow: inset 0px 0px 24px -2px rgba(184,182,184,0.39);*/
    /*-moz-box-shadow: inset 0px 0px 24px -2px rgba(184,182,184,0.39);*/
    /*box-shadow: inset 0px 0px 24px -2px rgba(184,182,184,0.39);*/
  }
  .headerVisit{
    text-align: left;
  }
  .headerVisit > h5{
    font-weight: 700;
  }
  .tableData{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .contentHome table tr > td {
    text-align: left;
    font-size: 17px;
  }
  .contentHome table tr > td:last-child{
    padding-left: 15px;
  }
  .contentHome table tr > td:first-child{
    font-weight: 400;
  }
  .tableInfo > h6, .tableContact > h6 {
    text-align: left;
    font-weight: 300;
    color: #636963;
    margin-bottom: 10px;
  }
  .tableInfo{
    margin-bottom: 10px;
  }
  .hr{
    border: 1px solid #d4d4d4;
  }
  .about > div:first-child > h6, .aboutSite > div:first-child > h6 {
    font-weight: 300;
    color: #636963;
    margin-bottom: 10px;
  }
  .contentAbout{
    text-align: left;
    padding-bottom: 10px;
  }
  .contentAbout > div:first-child  > h6{
    font-weight: 400;
    color: #636963;
    font-size: 16px;
  }
  .contentAbout >div:first-child{
    margin-bottom: 10px;
  }
  blockquote > p{
    font-size: 20px;
  }
  /**Media**/
  @media screen and (max-width: 1500px) {
    .leftContentHome {
      margin: 0 auto;
      margin-top: 60px;
    }
  }
  @media screen and (max-width: 700px) {
    .leftContentHome {
      width: 100%;
      margin: 20px 0 0 0;
    }
    .typerBlock {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1200px) {
    .contentBlock > div{
      max-width: 100%;
    }
  }
  @media screen and (max-width: 670px) {
    .contentBlock {
      padding: 0;
    }
    .__vuescroll .__view{
      width: 100%!important;
    }
  }
</style>
