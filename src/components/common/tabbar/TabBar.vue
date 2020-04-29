<template>
 <div id="tab-bar">
   <slot></slot>     
 </div>
</template>
<script>

 export default {
   name:'TabBar',
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
 #tab-bar {
   /* 本身样式 */
   background-color: #f6f6f6;
   height: 49px;
   border-top: 1px solid #eee;
   box-shadow: 0px -1px 2px rgba(150, 150, 150, .2);

   /* 定位 */
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;

   /* 布局 */
   display: flex;
   text-align: center;
 }
 
</style>
