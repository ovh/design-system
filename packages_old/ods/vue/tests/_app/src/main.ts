import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@ovhcloud/ods-themes/default';

createApp(App).use(router).mount('#app');
