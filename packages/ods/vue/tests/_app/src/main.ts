import { ComponentLibrary } from '@ovhcloud/ods-components-vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@ovhcloud/ods-themes/default';

createApp(App)
  .use(ComponentLibrary)
  .use(router)
  .mount('#app');
