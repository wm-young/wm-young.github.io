import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/career',
    name: 'Career',
    component: function () {
      return import(/* webpackChunkName: "career" */ '../views/Career.vue')
    }
  },
  {
    path: '/education',
    name: 'Education',
    component: function () {
      return import(/* webpackChunkName: "career" */ '../views/Education.vue')
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: function () {
      return import(/* webpackChunkName: "career" */ '../views/Projects.vue')
    }
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: function () {
      return import(/* webpackChunkName: "career" */ '../views/Hobbies.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
