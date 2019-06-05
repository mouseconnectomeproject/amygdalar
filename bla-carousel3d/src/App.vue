<script>
import BlaMenu from './components/BlaMenu.vue'
import BlaCarousel3d from './components/BlaCarousel3d'
import imageData from './assets/data.json'

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
</template>

<style scoped></style>
 