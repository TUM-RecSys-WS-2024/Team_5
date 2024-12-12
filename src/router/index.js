import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'
import Location from '../views/Location.vue'
import Swipe from '../views/Swipe.vue'
import Photo from '../views/Photo.vue'
import Recommendation from '../views/Recommendation.vue'

const router = createRouter({
    // 使用 Vite 默认的 history 路由模式
    history: createWebHistory('/'),  // 这里改为 '/' 或者其他你应用的基础路径
    routes: [
      { path: '/', component: Home },
      { path: '/home', component: Home }, 
      { path: '/intro', component: Intro},
      { path: '/location', component: Location },
      { path: '/swipequiz', component: Swipe },
      { path: '/photo', component: Photo },
      { path: '/recommendation', component: Recommendation }
    ]
  })

export default router