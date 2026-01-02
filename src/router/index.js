import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue'
import Blog from '../Pages/Blog.vue'
import Pages from '../Pages/Pages.vue'
import Contact from '../Pages/Contact.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/Blog', name: 'Blog', component: Blog },
    { path: '/Pages', name: 'Pages', component: Pages },
    { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router