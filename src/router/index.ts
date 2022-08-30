import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Default Layout',
            component: () => import('~/layouts/defaultLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('~/pages/Home.vue'),
                },
                {
                    path: '/about',
                    name: 'About',
                    component: () => import('~/pages/About.vue'),
                },
            ]
        },

    ],
})

export default router
