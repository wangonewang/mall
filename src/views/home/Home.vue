<template>
 <div>
   <nav-bar class="nav-bar">
     <div slot="nav-center">购物街</div>
   </nav-bar>
 </div>
</template>
<script>
import {getHomeMultidata} from 'network/home'
import NavBar from 'common/navbar/NavBar.vue'
 export default {
   name:'Home',
   data () {
     return {
       banners: [],
       recommends: []
     }
   },
   components: {
     NavBar
   },
   computed:{
 
   },
   methods:{
 
   },
   created() {
     getHomeMultidata().then(res => {
      //  console.log(res)
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list

     })
   }
 }
</script>
<style scoped>
  .nav-bar {
    background-color: #ff8198;
    color: #fff;
    font-weight: 700;
  }
</style>
