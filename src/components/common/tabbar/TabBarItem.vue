<template>
 <div id="tab-bar-item" @click="itemClik">
   <div class="item-icon" v-if="!isActive"><slot name="icon"></slot></div>
   <div class="item-icon-active" v-else><slot name="icon-active"></slot></div>
   <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
 </div>
</template>
<script>
 export default {
   name:'TabBarItem',
   props: {
     link: {
       type: String,
       required: true
     },
     activeColor: {
       type: String,
       default: 'red'
     }
   },
   data () {
     return {
      //  isActive: true
     }
   },
   components: {
 
   },
   computed:{
     isActive() {
       return this.$route.path.indexOf(this.link) !== -1
     },
     activeStyle() {
       return this.isActive ? {color: this.activeColor}:{}
     }

   },
   methods:{
     itemClik() {
       this.$router.push(this.link)
     }
   },
 }
</script>
<style scoped>
  #tab-bar-item {
    flex: 1;
  }
  .item-icon img, .item-icon-active img{
    width: 24px;
    height: 24px;
    margin-top: 2px;
    vertical-align: middle;
  }

  .item-text {
    margin-top: 3px;
    font-size: 12px;
    color: #333;
  }

</style>
