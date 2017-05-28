/**
 * Created by mmf on 17/5/28.
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI);

new Vue({
        el: '#app',
        render: h => h(App)
});