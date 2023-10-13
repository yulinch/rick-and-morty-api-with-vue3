import { createApp } from 'vue';
import './style/style.css';
import App from './App.vue';
import router from './router/index.js';

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app');
createApp(App).use(router).mount('#app');
