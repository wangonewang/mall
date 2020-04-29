import Vue from 'vue'
import VueRouter from 'vue-router'

// vue-router升级到3.0.7以上时使用$router.push方法时是返回一个promis,
// 所以使用push方法要在后面加catch方法
// 比如 this.$router.push('/home').catch(err => err),不然就会报错
// 如果不想加catch方法就加上下面这段代码
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}


const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router

