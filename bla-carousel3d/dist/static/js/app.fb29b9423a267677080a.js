webpackJsonp([0],{NHnr:function(_,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("/5sW"),e={render:function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("div",{staticClass:"funkyradio col-xs-2",attrs:{id:"blaRadios"}},_._l(_.projections,function(t,l){return a("div",{class:t.class},[a("span",[_._v(_._s(t.label))]),_._v(" "),_._l(_.regions,function(t,e){return a("div",{staticClass:"funkyradio-default"},[a("input",{directives:[{name:"model",rawName:"v-model",value:_.picked,expression:"picked"}],attrs:{type:"radio",id:3*l+1+e},domProps:{value:"image"+(3*l+1+e),checked:_._q(_.picked,"image"+(3*l+1+e))},on:{change:[function(t){_.picked="image"+(3*l+1+e)},function(t){return _.change()}]}}),_._v(" "),a("label",{staticStyle:{"margin-top":"1.4em"},attrs:{for:3*l+1+e}},_._l(t.region,function(l,e){return a("span",{class:l.class},[_._v(_._s(l.label)),e!=Object.keys(t.region).length-1?a("span",[_._v(", ")]):_._e()])}),0)])})],2)}),0)},staticRenderFns:[]};var c=a("VU/8")({data:function(){return{picked:"image1",projections:[{label:"Anterograde",class:"anterograde"},{label:"Retrograde",class:"retrograde"}],regions:[{region:[{class:"blaam",label:"BLA.am"},{class:"blaal",label:"BLA.al"},{class:"blaac",label:"BLA.ac"}]},{region:[{class:"blap",label:"BLAp"},{class:"blaal",label:"BLA.al"}]},{region:[{class:"blav",label:"BLAv"},{class:"la",label:"LA"},{class:"bmap",label:"BMAp"}]}]}},methods:{change:function(){this.$emit("picked-images",this.picked)}}},e,!1,function(_){a("igHk")},"data-v-0b2e116e",null).exports,s=a("T2eB"),A={components:{Carousel3d:s.Carousel3d,Slide:s.Slide},props:{slides:{type:Array,default:function(){return[]}}},mounted:function(){var _=this;window.addEventListener("keyup",function(t){39==t.keyCode&&_.$refs.blaCarousel.goNext(),37==t.keyCode&&_.$refs.blaCarousel.goPrev()})}},g={render:function(){var _=this,t=_.$createElement,a=_._self._c||t;return a("div",{staticClass:"col-xs-10",attrs:{id:"carousel"}},[a("carousel-3d",{ref:"blaCarousel",attrs:{count:_.slides.length,border:0,perspective:0,"controls-visible":!0,"controls-prev-html":"&#10092;","controls-next-html":"&#10093;","controls-width":30,"controls-height":660,width:1200,height:1e3,display:3,inverseScaling:0,startIndex:_.slides.length/2}},_._l(_.slides,function(t,l){return a("slide",{attrs:{index:l}},[a("img",{attrs:{src:t.href}}),_._v(" "),a("figcaption",[_._v(_._s(t.atlasLevel))])])}),1)],1)},staticRenderFns:[]};var p=a("VU/8")(A,g,!1,function(_){a("XUDC")},"data-v-6ffbda06",null).exports,r=a("ZTUR"),L=a.n(r),i={name:"app",components:{BlaMenu:c,BlaCarousel3d:p},methods:{pickedImages:function(_){this.images=L.a[_]}},data:function(){return{images:L.a.image1}}},v={render:function(){var _=this.$createElement,t=this._self._c||_;return t("div",{attrs:{id:"app"}},[t("bla-menu",{on:{"picked-images":this.pickedImages}}),this._v(" "),t("bla-carousel3d",{attrs:{slides:this.images}})],1)},staticRenderFns:[]};var B=a("VU/8")(i,v,!1,function(_){a("YJYC")},"data-v-416ef781",null).exports;l.a.config.productionTip=!1,new l.a({el:"#app",render:function(_){return _(B)}})},XUDC:function(_,t){},YJYC:function(_,t){},ZTUR:function(_,t){_.exports={image3:[{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/101_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 101"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/103_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 103"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/025_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 25"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/029_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 29"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/031_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 31"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/033_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 33"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/037_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 37"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/039_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 39"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/041_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 41"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/045_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 45"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/047_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 47"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/049_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 49"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/053_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 53"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/055_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 55"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/057_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 57"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/061_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 61"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/063_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 63"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/065_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 65"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/067_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 67"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/069_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 69"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/073_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 73"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/075_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 75"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/077_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 77"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/079_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 79"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/081_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 81"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/085_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 85"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/087_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 87"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/089_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 89"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/091_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 91"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/093_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 93"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/097_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 97"},{href:"static/publish_LA_BLAv_BMAp_ant/norm_agg_cmt_clr_LA_BLAv_BMAp_ant_175/099_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 99"}],image2:[{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/101_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 101"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/103_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 103"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/025_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 25"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/029_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 29"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/031_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 31"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/033_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 33"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/037_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 37"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/039_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 39"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/041_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 41"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/045_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 45"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/047_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 47"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/049_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 49"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/053_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 53"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/055_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 55"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/057_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 57"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/061_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 61"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/063_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 63"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/065_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 65"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/067_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 67"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/069_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 69"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/073_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 73"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/075_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 75"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/077_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 77"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/079_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 79"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/081_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 81"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/085_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 85"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/087_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 87"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/089_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 89"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/091_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 91"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/093_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 93"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/097_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 97"},{href:"static/publish_BLAalvsBLAp_ant_2/agg_cmt_clr_BLAalvsBLAp_ant_2_175/099_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 99"}],image1:[{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/101_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 101"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/103_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 103"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/025_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 25"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/029_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 29"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/031_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 31"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/033_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 33"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/037_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 37"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/039_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 39"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/041_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 41"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/045_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 45"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/047_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 47"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/049_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 49"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/053_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 53"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/055_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 55"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/057_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 57"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/061_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 61"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/063_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 63"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/065_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 65"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/067_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 67"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/069_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 69"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/073_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 73"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/075_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 75"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/077_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 77"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/079_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 79"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/081_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 81"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/085_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 85"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/087_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 87"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/089_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 89"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/091_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 91"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/093_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 93"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/097_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 97"},{href:"static/publish_BLAa_ant_2/agg_cmt_clr_BLAa_ant_2_175/099_agg_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 99"}],image6:[{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/101_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 101"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/103_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 103"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/025_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 25"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/029_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 29"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/031_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 31"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/033_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 33"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/037_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 37"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/039_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 39"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/041_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 41"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/045_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 45"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/047_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 47"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/049_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 49"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/053_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 53"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/055_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 55"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/057_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 57"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/061_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 61"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/063_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 63"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/065_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 65"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/067_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 67"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/069_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 69"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/073_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 73"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/075_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 75"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/077_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 77"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/079_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 79"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/081_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 81"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/085_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 85"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/087_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 87"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/089_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 89"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/091_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 91"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/093_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 93"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/097_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 97"},{href:"static/publish_LA_BLAv_BMAp_ret/agg_cmt_clr_LA_BLAv_BMAp_ret_175_1.00/099_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 99"}],image5:[{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/101_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 101"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/103_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 103"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/025_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 25"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/029_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 29"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/031_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 31"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/033_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 33"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/037_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 37"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/039_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 39"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/041_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 41"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/045_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 45"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/047_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 47"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/049_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 49"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/053_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 53"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/055_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 55"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/057_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 57"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/061_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 61"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/063_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 63"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/065_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 65"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/067_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 67"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/069_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 69"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/073_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 73"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/075_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 75"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/077_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 77"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/079_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 79"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/081_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 81"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/085_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 85"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/087_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 87"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/089_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 89"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/091_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 91"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/093_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 93"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/097_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 97"},{href:"static/publish_BLAalvsBLAp_ret/agg_cmt_clr_BLAalvsBLAp_ret_175_1.00/099_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 99"}],image4:[{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/101_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 101"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/103_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 103"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/025_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 25"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/029_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 29"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/031_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 31"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/033_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 33"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/037_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 37"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/039_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 39"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/041_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 41"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/045_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 45"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/047_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 47"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/049_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 49"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/053_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 53"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/055_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 55"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/057_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 57"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/061_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 61"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/063_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 63"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/065_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 65"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/067_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 67"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/069_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 69"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/073_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 73"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/075_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 75"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/077_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 77"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/079_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 79"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/081_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 81"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/085_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 85"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/087_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 87"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/089_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 89"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/091_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 91"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/093_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 93"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/097_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 97"},{href:"static/publish_BLAa_ret/agg_cmt_clr_BLAa_ret_175_1.00/099_agg_degenerate_cmt_clr_visual_15pct_tsp.png",atlasLevel:"ARA 99"}]}},igHk:function(_,t){}},["NHnr"]);
//# sourceMappingURL=app.fb29b9423a267677080a.js.map