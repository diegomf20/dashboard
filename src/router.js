import Vue from 'vue';
import VueRouter from 'vue-router'
import multiguard from 'vue-router-multiguard'

Vue.use(VueRouter)


var routes =[
    { 
        path: '/', 
        component: require('./view/input.vue').default
    },
    { 
        path: '/table', 
        component: require('./view/table.vue').default
    },
];
var router=new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});
export default router;