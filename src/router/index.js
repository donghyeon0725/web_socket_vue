import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/clock',
            component: () => import('/src/views/ClockPage.vue'),
        },
        {
            path: '/perfume',
            component: () => import('/src/views/PerfumePage.vue'),
        }
    ],
}); // 새로운 라우터를 생성해서 export

export default router;
