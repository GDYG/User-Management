import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
