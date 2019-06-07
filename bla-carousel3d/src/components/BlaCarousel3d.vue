<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'

  export default {
    components: {
      Carousel3d,
      Slide
    },
    props: {
        slides: {
          type: Array,
          default: function () { return [] }
        }
    },
    mounted: function() {
      var self = this;
      window.addEventListener('keyup', function(event) {
        if (event.keyCode == 39) {
            self.$refs.blaCarousel.goNext();
        }
        if (event.keyCode == 37) { 
            self.$refs.blaCarousel.goPrev();
        }
      });
    }
  };

</script>

<template>
    <div id="carousel" class="col-xs-10">
        <carousel-3d ref="blaCarousel" :count="slides.length" :border="0" :perspective="0" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" :controls-width="30" :controls-height="660" :width="1200" :height="1000" :display="3" :inverseScaling="0" :startIndex="slides.length/2">
            <slide v-for="(slide, i) in slides" :index="i">
                <img v-bind:src="slide.href">
                <figcaption>{{slide.atlasLevel}}</figcaption>
            </slide>
        </carousel-3d>
    </div>
</template>

<style scoped>
.carousel-3d-slide {
  background-color: transparent;
}

figcaption {
  font-size: 20px;
  text-align: center;
}
</style>