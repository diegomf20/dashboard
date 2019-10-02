import Vue from 'vue';
import vSelect from 'vue-select'
import 'table2excel';

window.$=$;
window.local=window.localStorage;
window.Table2Excel;

import Dashboard from './Dashboard.vue';

var router = require('./router.js').default;
new Vue({
    el: '#app',
    router,
    render: h => h(Dashboard)
})