import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/jobs/NotFound.vue'
import Comp from '../views/Composition.vue'
import Post from '../views/data/PostList.vue'
import Create from '../views/data/CreatePost.vue'
import Login from '../views/register/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView

    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs

    },
    {
      path: '/jobs/:id',
      name: 'jobsDetails',
      component: JobDetails,
      props: true

    },
    {
      path: '/comp',
      name: 'comp',
      component: Comp

    },
    {
      path: '/post',
      name: 'post',
      component: Post

    },
    {
      path: '/create',
      name: 'create',
      component: Create

    },

    {
      path: '/login',
      name: 'login',
      component: Login

    },

    ////redirect
    {
      path:'/all-jobs',
      redirect: '/jobs'
    },

    ////404 error
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound,

    }
  ]
})

export default router
