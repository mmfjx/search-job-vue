import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home';
import City from '@/pages/city/index';
import JobDetail from '@/pages/job/jobDetail';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/city',
            name: 'city',
            component: City
        },
        {
            path: '/job/detail/:id',
            name: 'jobDetail',
            component: JobDetail
        }
    ]
});
