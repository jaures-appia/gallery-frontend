import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index2 from '../views/Index2.vue'
import AddPhoto from '../views/AddPhoto.vue'
import SinglePhoto from '../views/SinglePhoto.vue'
import Profile from '../views/Profile.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my-photos',
    name: 'Index2',
    component: Index2
  },
  {
    path: '/add-photo',
    name: 'AddPhoto',
    component: AddPhoto
  },
  {
    path: '/single-photo/:photoID',
    name: 'SinglePhoto',
    component: SinglePhoto
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/profile/:userID',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
