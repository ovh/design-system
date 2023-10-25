import { createApp } from 'vue';
import './style.css';
import { OdsWindow } from '@ovhcloud/ods-common-core';

import App from './App.vue';

// eslint-disable-next-line no-var
declare var window: OdsWindow;
!window.ods && (window.ods = { config: { logging: { active: true } } });
if (window?.ods?.config?.logging) {
  window.ods.config.logging.active = true;
}

/**
 * in case of using directly web components, not Vue components,
 * you need to add a configuration with custom library in order to call
 * the definedCustomElement.
 * ```
 * createApp(App).use(ComponentLibrary).mount('#app')
 * ```
 */
createApp(App).mount('#app');
