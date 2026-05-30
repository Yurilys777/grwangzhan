import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tech from '../views/Tech.vue'
import Life from '../views/Life.vue'
import Notes from '../views/Notes.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Message from '../views/Message.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tech',
    name: 'Tech',
    component: Tech
  },
  {
    path: '/life',
    name: 'Life',
    component: Life
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 