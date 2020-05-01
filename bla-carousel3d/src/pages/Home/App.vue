<script>
import BlaMenu from '../../components/BlaMenu.vue'
import BlaCarousel3d from '../../components/BlaCarousel3d'
import Header from '../../components/Header'
import imageData from '../../assets/data.json'

export default {
  name : 'app',
  components: {
    Header,
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
      <header/>
      <bla-menu @picked-images="pickedImages" />
      <bla-carousel3d :slides="images" />
  </div>
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
 