<template>
  <div class="sectionBox shadow-6">
      <div class="contentBox">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import home from 'src/components/views/home'
import skills from 'src/components/views/skills'
import portfolio from 'src/components/views/portfolio'
import contacts from 'src/components/views/contacts'
export default {
  name: 'router-links',
  components: {
    home,
    skills,
    portfolio,
    contacts
  },
  data () {
    return {
      linksArr: [
        {
          link: 'skills'
        }
      ]
    }
  }
}
</script>

<style>
  /***Global***/
  .sectionBox{
    text-align: center;
    height: 100%;
    /*box-shadow: 0 4px 4px -1px rgba(0,0,0,0.2), 0 -4px 4px -1px rgba(0,0,0,0.2), 4px 8px 10px rgba(0,0,0,0.12), 2px -4px 10px rgba(0,0,0,0.12);*/
    padding: 24px;
    border-radius: 4px;
    transition: 0.5s;
    /*background: #b4d0e087;*/
    background: rgba(193, 216, 228, 0.95);
  }
  /*.sectionBox:hover{*/
    /*padding: 12px;*/
  /*}*/
  .contentBox{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: rgba(255,255,255,1);
    background: -moz-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 41%, rgba(238,236,238,1) 77%, rgba(237,234,237,1) 83%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(255,255,255,1)), color-stop(41%, rgba(245,245,245,1)), color-stop(77%, rgba(238,236,238,1)), color-stop(83%, rgba(237,234,237,1)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 41%, rgba(238,236,238,1) 77%, rgba(237,234,237,1) 83%);
    background: -o-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 41%, rgba(238,236,238,1) 77%, rgba(237,234,237,1) 83%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 41%, rgba(238,236,238,1) 77%, rgba(237,234,237,1) 83%);
    background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 41%, rgba(238,236,238,1) 77%, rgba(237,234,237,1) 83%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#edeaed', GradientType=1 );
    -webkit-box-shadow: inset 0px 0px 24px -2px rgba(184,182,184,0.39);
    -moz-box-shadow: inset 0px 0px 24px -2px rgba(184,182,184,0.39);
    box-shadow: inset 0px 0px 24px -2px rgba(184,182,184,0.39);
    border: 1px solid #a5a4a47a;
  }
  @media screen and (max-width: 500px) {
    .sectionBox{
      padding: 0;
    }
  }
</style>
