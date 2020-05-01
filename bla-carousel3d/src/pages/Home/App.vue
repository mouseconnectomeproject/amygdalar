<script>
import BlaMenu from '../../components/BlaMenu.vue'
import BlaCarousel3d from '../../components/BlaCarousel3d'
import imageData from '../../assets/data.json'

export default {
  name : 'app',
  components: {
    BlaMenu,
    BlaCarousel3d
  },
  methods: {
    pickedImages(picked) {
      this.images = imageData[picked];
    }
  },
  data () {
    return {
        "images": imageData['image1']
    }
  }
}
</script>

<template>
  <div id="app">
      <bla-menu @picked-images="pickedImages" />
      <bla-carousel3d :slides="images" />
  </div>
  <a href="https://cic.ini.usc.edu/">
    <img src="static/CIC_logo.png" style="width:20%"/>
  </a>
  <a style="font-family: Garamond;font-size: 15px;position: absolute;right: 10px;top: 10px;" href="https://github.com/mouseconnectomeproject/amygdalar/blob/master/README.md">How To Cite</a>
</template>

<style scoped>
  #blaRadios {
    position: relative;
    top: 205px;
  }

  .funkyradio input[type="radio"]:empty ~ label, .funkyradio input[type="checkbox"]:empty ~ label {
    margin-top: 1em;
  }  
</style>
 