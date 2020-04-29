<template>
 <div id="main-tab=bar">
   <tab-bar>
     <tab-bar-item link="/home" >
       <!-- slot要被废弃 可以用v-slot代替 只能在template中用 -->
       <!-- <template v-slot:icon>
         <img src="~assets/img/tabbar/home.svg" alt="">
       </template> -->
       <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
       <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
       <div slot="text">首页</div>
     </tab-bar-item>
     <tab-bar-item link="category">
       <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
       <img slot="icon-active" src="~assets/img/tabbar/category_active.svg">
       <div slot="text">分类</div>
     </tab-bar-item>
     <tab-bar-item link="cart">
       <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
       <img slot="icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
       <div slot="text">购物车</div>
     </tab-bar-item>
     <tab-bar-item link="profile">
       <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
       <img slot="icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
       <div slot="text">我的</div>
     </tab-bar-item>
   </tab-bar>
 </div>
</template>
<script>
import TabBar from 'common/tabbar/TabBar.vue'
import TabBarItem from 'common/tabbar/TabBarItem.vue'
 export default {
   name:'MainTabBar',
   data () {
     return {
 
     }
   },
   components: {
     TabBar,
     TabBarItem
   },
   computed:{
 
   },
   methods:{
 
   },
 }
</script>
<style scoped>
 
</style>
