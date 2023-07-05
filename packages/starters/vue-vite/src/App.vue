<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import odsLogo from './assets/ods.svg'
import viteLogo from './assets/vite.svg'
import vueLogo from './assets/vue.svg'

// for each component's type you use from ODS, you will need to import the core or theming:
import { Ods, odsSetup } from '@ovhcloud/ods-core'
import { OdsThemeColorHue, OdsThemeColorIntent } from '@ovhcloud/ods-theming';

// for each react component you use from `ODS`, use this import:
import { OsdsText } from '@ovhcloud/ods-component-text-vue';
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-text';

import Demo from './demo/Demo.vue';

// you can directly import the generated ods theme here, or through the application css (app.css)
import '@ovhcloud/ods-theme-blue-jeans/index.css';

// you have to setup ods before using it:
odsSetup();
Ods.instance().assetPath('flags/flags-4x3/');

// enable logging of ODS and custom logger
// Ods.instance().logging(true);

</script>

<template>
  <div class="ods-theme">
    <div>
      <a href="http://go/odsdoc" target="_blank" rel="noopener noreferrer">
        <img :src="odsLogo" class="logo" alt="ODS logo"/>
      </a>
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img :src="viteLogo" class="logo" alt="Vite logo"/>
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
        <img :src="vueLogo" class="logo vue" alt="Vue logo"/>
      </a>
    </div>
    <h1 class="ods-heading-800">ODS + Vite + Vue</h1>
    <div class="ods-caption-200">
      <p>
        <OsdsText :color="OdsThemeColorIntent.info" :size="ODS_TEXT_SIZE._100">
          Edit <code>src/App.tsx</code> and save to test HMR
        </OsdsText>
      </p>
    </div>
    <p>
      <OsdsText :color="OdsThemeColorIntent.default" :size="ODS_TEXT_SIZE._200" :hue="OdsThemeColorHue._600">
        Click on the ODS, Vite or React logos to learn more
      </OsdsText>
    </p>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>,
      the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <Demo/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
