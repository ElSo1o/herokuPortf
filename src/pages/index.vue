<template>
    <!--<transition-->
      <!--name="custom-classes-transition"-->
      <!--enter-active-class="animated zoomOutUp"-->
      <!--leave-active-class="animated zoomOutDown"-->
    <!--&gt;-->
    <!--<router-view></router-view>-->
    <!--</transition>-->
  <div class="content">
    <content-box>
    </content-box>
    <bg-glitch></bg-glitch>
  </div>
</template>

<style>
  .content{
    padding: 48px 40px;
    height: 100%;
  }
</style>

<script>
import bgGlitch from 'src/components/UI_components/bgGlitch'
import contentBox from 'src/components/UI_components/contentBox'
export default {
  name: 'PageIndex',
  components: {
    bgGlitch,
    contentBox
  }
}
</script>
