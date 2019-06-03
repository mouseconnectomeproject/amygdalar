<script>
export default {
  data() {
    return {

/*        
      choices: {
        anterograde: [
          {
            image1: "BLA.am, BLA.al, BLA.ac",
            image2: "BLAal, BLAp",
            image3: "LA, BLAv, BMAp"
          }
        ],
        retrograde: [
          {
            image4: "BLA.am, BLA.al, BLA.ac",
            image5: "BLAal, BLAp",
            image6: "LA, BLAv, BMAp"
          }
        ]
      }
*/      
    };
  }
};
</script>

<template>
  <div>
    <div class="anterograde">
        <span>Antegrograde</span>
        <div class="funkyradio-default">
            <input type=radio id="2" value="image2" v-model="picked" v-on:change="change()">            
            <label for="2">BLA.am, BLA.al, BLA.ac</label>        
        </div>
        <div class="funkyradio-default">
            <input type=radio id="1" value="image1" v-model="picked" v-on:change="change()">
            <label for="1">BLAal, BLAp</label>                
        </div>        
        <div class="funkyradio-default">
            <input type=radio id="3" value="image3" v-model="picked" v-on:change="change()">
            <label for="3">LA, BLAv, BMAp</label>                
        </div>                
    </div>
    <div class="retrograde">
        <span>Retrograde</span>    
        <div class="funkyradio-default">
            <input type=radio id="4" value="image4" v-model="picked" v-on:change="change()">
            <label for="4">BLA.am, BLA.al, BLA.ac</label>        
        </div>            
        <div class="funkyradio-default">
            <input type=radio id="5" value="image5" v-model="picked" v-on:change="change()">
            <label for="5">BLAal, BLAp</label>        
        </div>        
        <div class="funkyradio-default">
            <input type=radio id="6" value="image6" v-model="picked" v-on:change="change()">
            <label for="6">LA, BLAv, BMAp</label>        
        </div>                        
    </div>
  </div>

</template>
