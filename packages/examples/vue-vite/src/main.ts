import { ComponentLibrary } from '@ovhcloud/ods-components-vue';
import '@ovhcloud/ods-themes/default';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(ComponentLibrary).mount('#app');
