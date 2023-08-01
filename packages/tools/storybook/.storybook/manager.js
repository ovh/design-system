import { addons } from '@storybook/addons';
import theme from './ods.theme';
import React from 'react';

import { releases } from '../public/releases.js';

const createHeaderElement = (element) => {
  const timer = setInterval(function(){
    let selector = document.querySelector('.sidebar-header');
    if (selector !== null) {
      selector.parentNode.insertBefore(element, selector.nextSibling);
      if(document.querySelector('#release-selector').innerHTML) {
        clearInterval(timer);
      }
    }
  }, 500);
};

setTimeout(() => {
  const urlVersionRegex = /\/(latest|v(\d\.?){3}[^\/]*)\//gmi;
  if (urlVersionRegex.test(location.href)) {
    const releasesSelector = document.createElement('select');
    releasesSelector.id = 'release-selector';
    Object.entries(releases).map((value) => {
      const option = document.createElement('option');
      option.text = value[0];
      option.value = value[1];
      releasesSelector.appendChild(option)
    });
    createHeaderElement(releasesSelector);

    releasesSelector.onchange = (selection) => {
      const version = selection.target.value === 'latest' ? 'latest' : `v${selection.target.value}`;
      location.pathname = location.pathname.replace(urlVersionRegex, version);
    };
  } else {
    const version = document.createElement('div');
    version.id = 'release-selector';
    version.innerText = Object.keys(releases)[0];
    createHeaderElement(version);
  }
}, 2000);

addons.setConfig({
  theme,
  sidebar: {
    renderLabel: item => {
      const badge = item.name
        .replace(/.*\[(.*?)\].*/i, '$1');

      let res = '';
      if(item.name !== badge) {
        res = `badge-${badge}`
      } else if(item.id.includes('--page')) {
        res = 'page';
      } else {
        res = 'folder';
      }

      return (<span className={res} title={res} badge-type={badge}>
                {item.name.replace(/\s?\[.*?\]\s?/gmi, '')}
              </span>);
    },
  },
});
