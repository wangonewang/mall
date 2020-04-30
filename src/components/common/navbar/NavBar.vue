<template>
 <div class="navbar">
   <div class="left"><slot name="nav-left"></slot></div>
   <div class="center"><slot name="nav-center"></slot></div>
   <div class="right"><slot name="nav-right"></slot></div>
 </div>
</template>
<script>
 export default {
   name:'NavBar',
   data () {
     return {
       
     }
   },
   components: {
 
   },
   computed:{
 
   },
   methods:{
 
   },
 }
</script>
<style scoped>
  .navbar {
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
  }
  .left, .right {
    width: 60px;
    /* background-color: red; */
  }
  .center {
    flex: 1;
    /* background-color: blue; */
  }
</style>
